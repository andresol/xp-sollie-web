import freemarker from '/lib/tineikt/freemarker';
import portal from '/lib/xp/portal';

const viewFile = resolve('primary-article.ftl');

function get() {
	const model = portal.getContent();
	model.config = portal.getComponent().config;


	return {
		body: freemarker.render(viewFile, model)
	};
}

exports.get = get;
