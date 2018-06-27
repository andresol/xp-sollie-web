

Object.defineProperty(exports, '__esModule', {
	value: true
});

const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

/* eslint-disable */
/* eslint-env node, es6, nes6, nashorn */

var JWebb = Java.type("com.goebl.david.Webb");
var JUtils = Java.type('info.sollie.util.Http');

/**
 * Wrapper class for using the com.goebl.david.Webb
 */

var Webb = function () {
	function Webb() {
		_classCallCheck(this, Webb);

		this.webb = JWebb.create();
	}

	_createClass(Webb, [{
		key: "post",
		value: function post(url) {
			return this.webb.post(url);
		}
	}, {
		key: "get",
		value: function get(url) {
			return this.webb.get(url);
		}
	}], [{
		key: "inputStreamToByteSource",
		value: function inputStreamToByteSource(inputStream) {
			return JUtils.inputStreamToByteSource(inputStream);
		}
	}]);

	return Webb;
}();

exports.default = Webb;