

Object.defineProperty(exports, '__esModule', {
	value: true
});

const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

/* eslint-env node, es6, nes6, nashorn */

const ExceptionsUtil = (function () {
	function ExceptionsUtil() {
		_classCallCheck(this, ExceptionsUtil);
	}

	_createClass(ExceptionsUtil, null, [{
		key: 'throwIfMissing',
		value: function throwIfMissing() {
			throw new Error('Missing parameter');
		}
	}]);

	return ExceptionsUtil;
}());

exports.default = ExceptionsUtil;
