/* eslint-disable */
/* eslint-env node, es6, nes6, nashorn */

const JWebb = Java.type("com.goebl.david.Webb");
const JUtils = Java.type('info.sollie.util.Http');

/**
 * Wrapper class for using the com.goebl.david.Webb
 */
class Webb {

	constructor() {
		this.webb = JWebb.create();
	}

	post(url) {
		return this.webb.post(url);
	}

	get(url) {
		return this.webb.get(url);
	}

	static inputStreamToByteSource (inputStream) {
		return JUtils.inputStreamToByteSource(inputStream);
	}
}

export default Webb;
