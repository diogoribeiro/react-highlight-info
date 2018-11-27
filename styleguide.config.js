const webpackConfig = require('./webpack.config.js');

module.exports = {
  webpackConfig,
  components: './src/*.js',
  ignore: [
    '**/__tests__/**',
    '**/*.test.js',
    '**/*.test.jsx',
  ],
};
