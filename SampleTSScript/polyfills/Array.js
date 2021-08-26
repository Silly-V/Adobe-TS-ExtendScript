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
};

if (!Array.prototype.every) {
  Array.prototype.every = function (callbackfn, thisArg) {
    'use strict';
    var T, k;
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }
    // 1. Let O be the result of calling ToObject passing the this
    //    value as the argument.
    var O = Object(this);
    // 2. Let lenValue be the result of calling the Get internal method
    //    of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;
    // 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
    if (typeof callbackfn !== 'function' && Object.prototype.toString.call(callbackfn) !== '[object Function]') {
      throw new TypeError();
    }
    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }
    // 6. Let k be 0.
    k = 0;
    // 7. Repeat, while k < len
    while (k < len) {
      var kValue;
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {
        var testResult;
        // i. Let kValue be the result of calling the Get internal method
        //    of O with argument Pk.
        kValue = O[k];

        // ii. Let testResult be the result of calling the Call internal method
        // of callbackfn with T as the this value if T is not undefined
        // else is the result of calling callbackfn
        // and argument list containing kValue, k, and O.
        if (T) testResult = callbackfn.call(T, kValue, k, O);
        else testResult = callbackfn(kValue,k,O)

        // iii. If ToBoolean(testResult) is false, return false.
        if (!testResult) {
          return false;
        }
      }
      k++;
    }
    return true;
  };
}

// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.io/#x15.4.4.19
if (!Array.prototype.map) {
	Array.prototype.map = function (callback/*, thisArg*/) {
		var T, A, k;
		if (this == null) {
			throw new TypeError('this is null or not defined');
		}
		var O = Object(this);
		var len = O.length >>> 0;
		// If IsCallable(callback) is false, throw a TypeError exception.
		// See: http://es5.github.com/#x9.11
		if (typeof callback !== 'function') {
			throw new TypeError(callback + ' is not a function');
		}
		// If thisArg was supplied, let T be thisArg; else let T be undefined.
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
		if ( ! ((typeof func === 'Function' || typeof func === 'function') && this) )
				throw new TypeError();
		var len = this.length >>> 0,
				res = new Array(len), // preallocate array
				t = this, c = 0, i = -1;
		var kValue;
		if (thisArg === undefined) {
			while (++i !== len) {
				// checks to see if the key was set
				if (i in this) {
					kValue = t[i]; // in case t is changed in callback
					if (func(t[i], i, t)) {
						res[c++] = kValue;
					}
				}
			}
		}	else {
			while (++i !== len) {
				// checks to see if the key was set
				if (i in this) {
					kValue = t[i];
					if (func.call(thisArg, t[i], i, t)) {
						res[c++] = kValue;
					}
				}
			}
		}
		res.length = c; // shrink down array to proper size
		return res;
	};
}

// https://tc39.github.io/ecma262/#sec-array.prototype.find
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
	}
}

if (!Array.prototype.includes) {
	//or use Object.defineProperty
	Array.prototype.includes = function (search) {
		return !!~this.indexOf(search);
	}
}

if (!Array.prototype.last) {
	Array.prototype.last = function () {
		if (this.length < 1) {
			return null;
		}
		return this[this.length - 1];
	};
};

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
};

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
};

// Production steps of ECMA-262, Edition 5, 15.4.4.17
// Reference: https://es5.github.io/#x15.4.4.17
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

// Production steps of ECMA-262, Edition 5, 15.4.4.21
// Reference: https://es5.github.io/#x15.4.4.21
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callback /*, initialValue*/) {
		if (this === null) {
			throw new TypeError( 'Array.prototype.reduce ' +
				'called on null or undefined' );
		}
		if (typeof callback !== 'function') {
			throw new TypeError( callback +
				' is not a function');
		}
		// 1. Let O be ? ToObject(this value).
		var o = Object(this);
		// 2. Let len be ? ToLength(? Get(O, "length")).
		var len = o.length >>> 0;
		// Steps 3, 4, 5, 6, 7
		var k = 0;
		var value;
		if (arguments.length >= 2) {
			value = arguments[1];
		} else {
			while (k < len && !(k in o)) {
				k++;
			}
			// 3. If len is 0 and initialValue is not present,
			//    throw a TypeError exception.
			if (k >= len) {
				throw new TypeError( 'Reduce of empty array ' +
					'with no initial value' );
			}
			value = o[k++];
		}
		// 8. Repeat, while k < len
		while (k < len) {
			// a. Let Pk be ! ToString(k).
			// b. Let kPresent be ? HasProperty(O, Pk).
			// c. If kPresent is true, then
			//    i.  Let kValue be ? Get(O, Pk).
			//    ii. Let accumulator be ? Call(
			//          callbackfn, undefined,
			//          « accumulator, kValue, k, O »).
			if (k in o) {
				value = callback(value, o[k], k, o);
			}
			// d. Increase k by 1.
			k++;
		}
		// 9. Return accumulator.
		return value;
	}
}

if (!Array.prototype.addUnique) {
	Array.prototype.addUnique = function (searchElement) {
		if (this.indexOf(searchElement) < 0) {
			this.push(searchElement);
			return true;
		}
		return false;
	};
};

if (!Array.prototype.removeUnique) {
	Array.prototype.removeUnique = function (searchElement) {
		var idx = this.indexOf(searchElement);
		if(idx > -1){
			this.splice(idx, 1);
			return true;
		}
		return false;
	};
};

if (!Array.prototype.removeAtIndex) {
	Array.prototype.removeAtIndex = function (idx) {
		if(idx > -1){
			this.splice(idx, 1);
			return true;
		}
		return false;
	};
};

Array.prototype.makeUnique = function () {
	return this.sort().filter(function (current, index, array) {
    return index === 0 || current !== array[index - 1];
	});
};