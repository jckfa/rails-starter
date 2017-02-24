const path       = require('path');
const webpack    = require('webpack');
const extractCSS = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'app/assets'),
  entry: {
    'app': './common.js',
  },
  output: {
    path: path.resolve(__dirname, "app/assets/build"),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?importLoaders=1',
            'postcss-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new extractCSS('bundle.css'),
  ]
}
