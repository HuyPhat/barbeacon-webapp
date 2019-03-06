const {
	override,
	fixBabelImports,
	addLessLoader,
	addDecoratorsLegacy,
	disableEsLint,
} = require("customize-cra");

module.exports = override(
	addDecoratorsLegacy(),
	fixBabelImports("import", {
		libraryName: "antd",
		libraryDirectory: "es",
		style: true,
	}),
	addLessLoader({
		javascriptEnabled: true,
		modifyVars: {},
	}),
);
