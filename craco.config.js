const CracoAntDesignPlugin = require("craco-antd");
const path = require("path");

// Don't open the browser during development
process.env.BROWSER = "none";

module.exports = {
  plugins: [
    // { plugin: CracoAntDesignPlugin },
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: path.join(
          __dirname,
          "src/style/antd.customize.less",
        ),
      },
    },
  ],
};
