const { resolve } = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'redux-ondispatch.js',
    library: 'redux-ondispatch',
    libraryTarget: 'umd'
  }
};
