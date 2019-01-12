const webpackResolveConfig = require('./configs/webpack.config.resolve');

const aliases = Object.keys(webpackResolveConfig.alias).map(key => [key, webpackResolveConfig.alias[key]]);

module.exports = {
  "settings": {
    "import/resolver": {
      alias: {
        map: aliases,
      },
    },
  },
  "extends": "eslint-config-airbnb",
  "env": {
    "jest": true,
    "browser": true,
  },
  "parser": "babel-eslint",
}
