String.prototype.trim = function () {
	return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

String.prototype.replaceAt = function (index, replacement) {
	return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};

String.prototype.hexDecode = function () {
	var r=''; for(var i = 0; i < this.length; i += 2){ r += unescape('%' + this.substr(i, 2));} return r;
};

String.prototype.hexEncode = function () {
	var r = ''; var i = 0; var h; while (i < this.length) { h = this.charCodeAt(i++).toString(16); while (h.length < 2) { h = h; } r += h; } return r;
};

String.prototype.escapeForRegexp = function () {
	return this.replace(/([\/.*+?|()[\]{}\\^$])/g,"\\$1");
};

if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';

    if (search instanceof RegExp) {
      throw TypeError('first argument must not be a RegExp');
    }
    if (start === undefined) { start = 0; }
    return this.indexOf(search, start) !== -1;
  };
}