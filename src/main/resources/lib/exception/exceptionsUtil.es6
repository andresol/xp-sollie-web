/* eslint-env node, es6, nes6, nashorn */

class ExceptionsUtil {

	static throwIfMissing() {
		throw new Error('Missing parameter');
	}
}

export default ExceptionsUtil;
