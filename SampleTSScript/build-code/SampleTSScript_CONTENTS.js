function test(inStr) {
    var resultStr;
    if (inStr) {
        resultStr = "Your string is: \"" + inStr + "\".";
    }
    else {
        resultStr = "Hello World!";
    }
    return resultStr;
}
function makeShapes(doc) {
    var completedItems = [];
    var _a = [0, 0], x = _a[0], y = _a[1];
    new Array(10).join(",").split("").forEach(function () {
        var newShape = doc.pathItems.rectangle(y, x, 50, 50);
        x += 10;
        y += 10;
        completedItems.push(newShape.uuid);
    });
    return completedItems;
}
function makeOtherShapes(doc) {
    var _a = [200, 0], x = _a[0], y = _a[1];
    CircleNames.forEach(function (m) { return doc.pathItems.ellipse(y += 10, x += 10, 50, 50); });
}
function initializeDocument() {
    var doc = app.activeDocument;
    var defaultColorization = {
        defaultFilled: false,
        defaultStroked: true
    };
    Object.assign(doc, defaultColorization);
}
var GlobalSessionInfo = {
    os: $.os.match('Windows') ? 'Windows' : 'Mac',
    AIVersion: parseInt(app.version.split(/\./)[0]),
    user: $.getenv($.os.includes("Windows") ? "USERNAME" : "USER")
};
var GlobalScriptInfo = {
    "scriptName": "SampleTSScript",
    "scriptVersion": "1.0.0",
    "author": "Vasily Hall",
    "author_email": "vasily.hall@gmail.com"
};
var CircleNames = [
    "Circle-1", "Circle-2", "Circle-3", "Circle-4", "Circle-5"
];
function uiWindow() {
    var w = new Window("dialog", GlobalScriptInfo.scriptName);
    if (typeof (memoryUILocation) != "undefined") {
        w.location = [memoryUILocation[0], memoryUILocation[1]];
    }
    var action;
    var greeting = w.add("statictext", undefined, "A UI Window for testing.");
    var textEntryGroup = w.add("group");
    var lbl_textEntry = textEntryGroup.add("statictext", undefined, "Text Input");
    var textEntryField = textEntryGroup.add("edittext", undefined, "");
    textEntryField.characters = 10;
    var g_btn = w.add("group");
    var btn_ccl = g_btn.add("button", undefined, "Cancel");
    var btn_test = g_btn.add("button", undefined, "Make Shapes");
    var btn_test2 = g_btn.add("button", undefined, "Make Other Shapes");
    btn_test2.onClick = btn_test.onClick = function () {
        action = this.text;
        w.close();
    };
    w.onClose = function () {
        memoryUILocation = [this.location[0], this.location[1]];
        return true;
    };
    if (w.show() == 2) {
        return null;
    }
    else {
        return {
            action: action,
            enteredText: textEntryField.text
        };
    }
}
function main() {
    if (app.documents.length == 0) {
        app.documents.add(DocumentColorSpace.CMYK, 800, 1000);
    }
    var uiResult = uiWindow();
    if (uiResult) {
        initializeDocument();
        var action = uiResult.action;
        if (action == "Make Shapes") {
            makeShapes(app.activeDocument);
        }
        else if (action == "Make Other Shapes") {
            makeOtherShapes(app.activeDocument);
        }
    }
}
var _polyfillSep = "------------------------------------------------------------------------------------------------------------------------------";
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement, fromIndex) {
        var k;
        if (this == null) {
            throw new TypeError('"this" is null or not defined');
        }
        var o = Object(this);
        var len = o.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = +fromIndex || 0;
        if (Math.abs(n) === Infinity) {
            n = 0;
        }
        if (n >= len) {
            return -1;
        }
        k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
        while (k < len) {
            if (k in o && o[k] === searchElement) {
                return k;
            }
            k++;
        }
        return -1;
    };
}
;
if (!Array.prototype.every) {
    Array.prototype.every = function (callbackfn, thisArg) {
        'use strict';
        var T, k;
        if (this == null) {
            throw new TypeError('this is null or not defined');
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if (typeof callbackfn !== 'function' && Object.prototype.toString.call(callbackfn) !== '[object Function]') {
            throw new TypeError();
        }
        if (arguments.length > 1) {
            T = thisArg;
        }
        k = 0;
        while (k < len) {
            var kValue;
            if (k in O) {
                var testResult;
                kValue = O[k];
                if (T)
                    testResult = callbackfn.call(T, kValue, k, O);
                else
                    testResult = callbackfn(kValue, k, O);
                if (!testResult) {
                    return false;
                }
            }
            k++;
        }
        return true;
    };
}
if (!Array.prototype.map) {
    Array.prototype.map = function (callback) {
        var T, A, k;
        if (this == null) {
            throw new TypeError('this is null or not defined');
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        if (arguments.length > 1) {
            T = arguments[1];
        }
        A = new Array(len);
        k = 0;
        while (k < len) {
            var kValue, mappedValue;
            if (k in O) {
                kValue = O[k];
                mappedValue = callback.call(T, kValue, k, O);
                A[k] = mappedValue;
            }
            k++;
        }
        return A;
    };
}
if (!Array.prototype.filter) {
    Array.prototype.filter = function (func, thisArg) {
        'use strict';
        if (!((typeof func === 'Function' || typeof func === 'function') && this))
            throw new TypeError();
        var len = this.length >>> 0, res = new Array(len), t = this, c = 0, i = -1;
        var kValue;
        if (thisArg === undefined) {
            while (++i !== len) {
                if (i in this) {
                    kValue = t[i];
                    if (func(t[i], i, t)) {
                        res[c++] = kValue;
                    }
                }
            }
        }
        else {
            while (++i !== len) {
                if (i in this) {
                    kValue = t[i];
                    if (func.call(thisArg, t[i], i, t)) {
                        res[c++] = kValue;
                    }
                }
            }
        }
        res.length = c;
        return res;
    };
}
if (!Array.prototype.find) {
    Array.prototype.find = function (predicate) {
        if (this == null) {
            throw TypeError('"this" is null or not defined');
        }
        var o = Object(this);
        var len = o.length >>> 0;
        if (typeof predicate !== 'function') {
            throw TypeError('predicate must be a function');
        }
        var thisArg = arguments[1];
        var k = 0;
        while (k < len) {
            var kValue = o[k];
            if (predicate.call(thisArg, kValue, k, o)) {
                return kValue;
            }
            k++;
        }
        return undefined;
    };
}
if (!Array.prototype.includes) {
    Array.prototype.includes = function (search) {
        return !!~this.indexOf(search);
    };
}
if (!Array.prototype.last) {
    Array.prototype.last = function () {
        if (this.length < 1) {
            return null;
        }
        return this[this.length - 1];
    };
}
;
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, thisArg) {
        var T, k;
        if (this == null) {
            throw new TypeError(' this is null or not defined');
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if (typeof callback !== "function") {
            throw new TypeError(callback + ' is not a function');
        }
        if (arguments.length > 1) {
            T = thisArg;
        }
        k = 0;
        while (k < len) {
            var kValue;
            if (k in O) {
                kValue = O[k];
                callback.call(T, kValue, k, O);
            }
            k++;
        }
    };
}
;
if (!Array.prototype.from) {
    Array.prototype.from = function (arrayLikeObject) {
        var arr = [];
        var thisItem;
        for (var i = 0; i < arrayLikeObject.length; i++) {
            thisItem = arrayLikeObject[i];
            arr.push(thisItem);
        }
        return arr;
    };
}
;
if (!Array.prototype.some) {
    Array.prototype.some = function (fun, thisArg) {
        'use strict';
        if (this == null) {
            throw new TypeError('Array.prototype.some called on null or undefined');
        }
        if (typeof fun !== 'function') {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(thisArg, t[i], i, t)) {
                return true;
            }
        }
        return false;
    };
}
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function (callback) {
        if (this === null) {
            throw new TypeError('Array.prototype.reduce ' +
                'called on null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback +
                ' is not a function');
        }
        var o = Object(this);
        var len = o.length >>> 0;
        var k = 0;
        var value;
        if (arguments.length >= 2) {
            value = arguments[1];
        }
        else {
            while (k < len && !(k in o)) {
                k++;
            }
            if (k >= len) {
                throw new TypeError('Reduce of empty array ' +
                    'with no initial value');
            }
            value = o[k++];
        }
        while (k < len) {
            if (k in o) {
                value = callback(value, o[k], k, o);
            }
            k++;
        }
        return value;
    };
}
if (!Array.prototype.addUnique) {
    Array.prototype.addUnique = function (searchElement) {
        if (this.indexOf(searchElement) < 0) {
            this.push(searchElement);
            return true;
        }
        return false;
    };
}
;
if (!Array.prototype.removeUnique) {
    Array.prototype.removeUnique = function (searchElement) {
        var idx = this.indexOf(searchElement);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    };
}
;
if (!Array.prototype.removeAtIndex) {
    Array.prototype.removeAtIndex = function (idx) {
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    };
}
;
Array.prototype.makeUnique = function () {
    return this.sort().filter(function (current, index, array) {
        return index === 0 || current !== array[index - 1];
    });
};
Number.prototype.toRadians = function () {
    return this * (Math.PI / 180);
};
Number.prototype.toDegrees = function () {
    return this * (180 / Math.PI);
};
Number.prototype.padZero = function (decimals) {
    if (typeof decimals == "undefined") {
        decimals = 2;
    }
    var numStr = this.toString();
    var decimalsFound = numStr.length;
    if (decimalsFound >= decimals) {
        return this;
    }
    while (decimalsFound < decimals) {
        numStr = '0' + numStr;
        decimalsFound += 1;
    }
    return numStr;
};
if (!Object.keys) {
    Object.keys = (function () {
        var hasOwnProperty = Object.prototype.hasOwnProperty, hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'), dontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
        ], dontEnumsLength = dontEnums.length;
        return function (obj) {
            if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null)
                throw new TypeError('Object.keys called on non-object');
            var result = [];
            for (var prop in obj) {
                if (hasOwnProperty.call(obj, prop))
                    result.push(prop);
            }
            if (hasDontEnumBug) {
                for (var i = 0; i < dontEnumsLength; i++) {
                    if (hasOwnProperty.call(obj, dontEnums[i]))
                        result.push(dontEnums[i]);
                }
            }
            return result;
        };
    })();
}
;
if (typeof Object.create != 'function') {
    Object.create = (function () {
        var Temp = function () { };
        return function (prototype) {
            if (arguments.length > 1) {
                throw Error('Second argument not supported');
            }
            if (prototype !== Object(prototype) && prototype !== null) {
                throw TypeError('Argument must be an object or null');
            }
            if (prototype === null) {
                throw Error('null [[Prototype]] not supported');
            }
            Temp.prototype = prototype;
            var result = new Temp();
            Temp.prototype = null;
            return result;
        };
    })();
}
;
if (typeof Object.toArray != 'function') {
    Object.toArray = (function () {
        return function (obj) {
            return Object.keys(obj).map(function (m) {
                return obj[m];
            });
        };
    })();
}
if (typeof Object.hasKeys != 'function') {
    Object.hasKeys = (function () {
        return function (obj) {
            if (obj == null) {
                return false;
            }
            return Object.keys(obj).length > 0;
        };
    })();
}
if (!('assign' in Object)) {
    Object.assign = function (has) {
        'use strict';
        return assign;
        function assign(target, source) {
            for (var i = 1; i < arguments.length; i++) {
                copy(target, arguments[i]);
            }
            return target;
        }
        function copy(target, source) {
            for (var key in source) {
                if (has.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
    }({}.hasOwnProperty);
}
function clone(obj) {
    var copy;
    if (null == obj || "object" != typeof obj)
        return obj;
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr))
                copy[attr] = clone(obj[attr]);
        }
        return copy;
    }
    throw new Error("Unable to copy obj! Its type isn't supported.");
}
;
String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};
String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};
String.prototype.hexDecode = function () {
    var r = '';
    for (var i = 0; i < this.length; i += 2) {
        r += unescape('%' + this.substr(i, 2));
    }
    return r;
};
String.prototype.hexEncode = function () {
    var r = '';
    var i = 0;
    var h;
    while (i < this.length) {
        h = this.charCodeAt(i++).toString(16);
        while (h.length < 2) {
            h = h;
        }
        r += h;
    }
    return r;
};
String.prototype.escapeForRegexp = function () {
    return this.replace(/([\/.*+?|()[\]{}\\^$])/g, "\\$1");
};
if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        'use strict';
        if (search instanceof RegExp) {
            throw TypeError('first argument must not be a RegExp');
        }
        if (start === undefined) {
            start = 0;
        }
        return this.indexOf(search, start) !== -1;
    };
}
"object" != typeof JSON && (JSON = {}), function () {
    "use strict";
    function f(t) { return 10 > t ? "0" + t : t; }
    function quote(t) {
        return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function (t) {
            var e = meta[t];
            return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + t + '"';
    }
    function str(t, e) {
        var n, r, o, f, u, i = gap, p = e[t];
        switch (p && "object" == typeof p && "function" == typeof p.toJSON && (p = p.toJSON(t)),
            "function" == typeof rep && (p = rep.call(e, t, p)), typeof p) {
            case "string": return quote(p);
            case "number": return isFinite(p) ? String(p) : "null";
            case "boolean":
            case "null": return String(p);
            case "object":
                if (!p)
                    return "null";
                if (gap += indent, u = [], "[object Array]" === Object.prototype.toString.apply(p)) {
                    for (f = p.length, n = 0; f > n; n += 1)
                        u[n] = str(n, p) || "null";
                    return o = 0 === u.length ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + i + "]" : "[" + u.join(",") + "]", gap = i, o;
                }
                if (rep && "object" == typeof rep)
                    for (f = rep.length, n = 0; f > n; n += 1)
                        "string" == typeof rep[n] && (r = rep[n], o = str(r, p), o && u.push(quote(r) + (gap ? ": " : ":") + o));
                else
                    for (r in p)
                        Object.prototype.hasOwnProperty.call(p, r) && (o = str(r, p), o && u.push(quote(r) + (gap ? ": " : ":") + o));
                return o = 0 === u.length ? "{}" : gap ? "{\n" + gap +
                    u.join(",\n" + gap) + "\n" + i + "}" : "{" + u.join(",") + "}", gap = i, o;
        }
    }
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" +
            f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
        return this.valueOf();
    });
    var cx, escapable, gap, indent, meta, rep;
    "function" != typeof JSON.stringify &&
        (escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            meta = { "\b": "\\b", "  ": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, JSON.stringify = function (t, e, n) {
            var r;
            if (gap = "", indent = "", "number" == typeof n)
                for (r = 0; n > r; r += 1)
                    indent += " ";
            else
                "string" == typeof n && (indent = n);
            if (rep = e,
                e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length))
                throw new Error("JSON.stringify");
            return str("", { "": t });
        }),
        "function" != typeof JSON.parse && (cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            JSON.parse = function (text, reviver) {
                function walk(t, e) {
                    var n, r, o = t[e];
                    if (o && "object" == typeof o)
                        for (n in o)
                            Object.prototype.hasOwnProperty.call(o, n) &&
                                (r = walk(o, n), void 0 !== r ? o[n] = r : delete o[n]);
                    return reviver.call(t, e, o);
                }
                var j;
                if (text = String(text), cx.lastIndex = 0, cx.test(text) &&
                    (text = text.replace(cx, function (t) { return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4); })),
                    /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]")
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                    return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j;
                throw new SyntaxError("JSON.parse");
            });
}();
