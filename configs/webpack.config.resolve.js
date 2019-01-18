const path = require('path');

const baseDir = path.resolve(__dirname, '..');

module.exports = {
  extensions: [
    '.js',
    '.jsx',
  ],
  alias: {
    Actions: path.resolve(baseDir, 'src/actions'),
    Components: path.resolve(baseDir, 'src/components'),
    Containers: path.resolve(baseDir, 'src/containers'),
    Data: path.resolve(baseDir, 'src/data'),
    GraphQL: path.resolve(baseDir, 'src/graphql'),
  },
};
