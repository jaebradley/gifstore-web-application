const path = require('path');

const baseDir = path.resolve(__dirname, '..');

module.exports = {
  extensions: [
    // mjs needs to be before jsx
    // https://github.com/graphql/graphql-js/issues/1272#issuecomment-377384574
    '.mjs',
    '.js',
    '.jsx',
  ],
  alias: {
    Actions: path.resolve(baseDir, 'src/actions'),
    Client: path.resolve(baseDir, 'src/client'),
    Components: path.resolve(baseDir, 'src/components'),
    Containers: path.resolve(baseDir, 'src/containers'),
    Data: path.resolve(baseDir, 'src/data'),
    GraphQL: path.resolve(baseDir, 'src/graphql'),
  },
};
