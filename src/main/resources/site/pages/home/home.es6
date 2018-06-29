import freemarker from '/lib/tineikt/freemarker';
import portalLib from '/lib/xp/portal';
import contentLib from '/lib/xp/content';
import menu from '/lib/enonic/menu';

// Handle the GET request
exports.get = () => {
	const cleanedAppName = app.name.replace(/\./g, '-');
	const site = portalLib.getSite();
	const config = portalLib.getSiteConfig() || {};
	const content = portalLib.getContent();
	const isFragment = content.type === 'portal:fragment';
	const isMenuAtRoot = (content._id === config.conMenuRoot) || false;

	const model = {
		isFragment,
		isMenuAtRoot,
		menuItems	: menu.getMenuTree(0),
		regions: isFragment ? null : content.page.regions.main,
		rootPath: site._path
	};

	const view = resolve('home.ftl');
	// Return the response object
	return {
		body: freemarker.render(view, model),
	};
};
