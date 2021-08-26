if (!Object.keys) {
	Object.keys = (function () {
		var hasOwnProperty = Object.prototype.hasOwnProperty,
			hasDontEnumBug = !({ toString : null }).propertyIsEnumerable('toString'),
			dontEnums = [
				'toString',
				'toLocaleString',
				'valueOf',
				'hasOwnProperty',
				'isPrototypeOf',
				'propertyIsEnumerable',
				'constructor'
			],
			dontEnumsLength = dontEnums.length;
		return function (obj) {
			if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object');
			var result = [];
			for (var prop in obj) {
				if (hasOwnProperty.call(obj, prop)) result.push(prop);
			}
			if (hasDontEnumBug) {
				for (var i = 0; i < dontEnumsLength; i++) {
					if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
				}
			}
			return result;
		}
	})()
};

if (typeof Object.create != 'function') {
	Object.create = (function () {
		var Temp = function () {};
		return function (prototype) {
			if (arguments.length > 1) {
				throw Error('Second argument not supported');
			}
			if(prototype !== Object(prototype) && prototype !== null) {
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
};

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
    function assign (target, source) {
      for (var i = 1; i < arguments.length; i++) {
        copy(target, arguments[i]);
      }
      return target;
    }
    function copy (target, source) {
      for (var key in source) {
        if (has.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
  }({}.hasOwnProperty);
}

function clone (obj) {
	var copy;
	// Handle the 3 simple types, and null or undefined
	if (null == obj || "object" != typeof obj) return obj;
	// Handle Date
	if (obj instanceof Date) {
		copy = new Date();
		copy.setTime(obj.getTime());
		return copy;
	}
	// Handle Array
	if (obj instanceof Array) {
		copy = [];
		for (var i = 0, len = obj.length; i < len; i++) {
			copy[i] = clone(obj[i]);
		}
		return copy;
	}
	// Handle Object
	if (obj instanceof Object) {
		copy = {};
		for (var attr in obj) {
			if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
		}
		return copy;
	}
	throw new Error("Unable to copy obj! Its type isn't supported.");
};