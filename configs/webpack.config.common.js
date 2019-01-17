const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

const resolveConfiguration = require('./webpack.config.resolve.js');
const {
  BASE_DIRECTORY,
  ENTRY_FILE_PATH,
  INDEX_HTML_PAGE_FILE_PATH,
  OUTPUT_DIRECTORY,
  OUTPUT_DIRECTORY_NAME,
  SOURCE_DIRECTORY,
} = require('./constants');

// Set the path parameter in the dotenv config
const fileEnv = dotenv.config().parsed;

// reduce it to a nice object, the same as before (but with the variables from the file)
const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
  // eslint-disable-next-line no-param-reassign
  prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
  return prev;
}, {});

module.exports = {
  entry: ENTRY_FILE_PATH,
  output: {
    filename: 'bundle.js',
    path: OUTPUT_DIRECTORY,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          SOURCE_DIRECTORY,
        ],
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  resolve: resolveConfiguration,
  plugins: [
    new CleanWebpackPlugin(
      [
        OUTPUT_DIRECTORY_NAME,
      ],
      {
        root: BASE_DIRECTORY,
      },
    ),
    new HtmlWebpackPlugin({
      inject: false,
      template: INDEX_HTML_PAGE_FILE_PATH,
    }),
    new webpack.DefinePlugin(envKeys),
  ],
};
