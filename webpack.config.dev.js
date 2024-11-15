const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    liveReload: true,
    hot: true,
    open: true,
    static: [
      {
        directory: path.join(__dirname, 'public'),
        publicPath: '/',
      },
      {
        directory: path.join(__dirname, 'images'),
        publicPath: '/images',
      }
    ],
    historyApiFallback: {
      index: '/index.html', // Default fallback
      rewrites: [
        { from: /.*/, to: '/404.html' } // Fallback to 404.html for all unmatched routes
      ]
    }
  },
});
