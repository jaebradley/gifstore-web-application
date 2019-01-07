const path = require('path');

const baseDir = path.resolve(__dirname, '..');

module.exports = {
  extensions: [
    '.js',
    '.jsx',
  ],
  alias: {
    Components: path.resolve(baseDir, 'src/components'),
    Actions: path.resolve(baseDir, 'src/actions'),
  },
};
