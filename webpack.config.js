var path = require('path')
var webpack = require('webpack')

// I'm running a very basic command to convert app.js => bundle.js. It looks like:
//
// webpack app.js bundle.js

module.exports = {
  entry: './src/main.js',

  output: {
    path: './bin',
    filename: 'app.bundle.js'
  },

  include: [
    path.resolve(__dirname, 'node_modules/matter-js'),
  ],

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      }
    ],

    postLoaders: [
      {
        include: path.resolve(__dirname, 'node_modules/pixi.js'),
        loader: 'transform?brfs'
      }
    ]

  }
}