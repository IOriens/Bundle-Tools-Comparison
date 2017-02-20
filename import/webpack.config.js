const webpack = require('webpack') // to access built-in plugins

module.exports = {
  entry: './src/app.js',
  output: {
    filename: './dist/webpack-bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      'compress': {
        warnings: false
      }
    })
  ]
}
