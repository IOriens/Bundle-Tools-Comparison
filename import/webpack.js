const webpack = require('webpack')

webpack({
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
    // new webpack.optimize.UglifyJsPlugin({
    //   'compress': {
    //     warnings: false
    //   }
    // })
  ]
}, (err, stats) => {
  if (err || stats.hasErrors()) {
    // Handle errors here
    throw err
  }
  // Done processing
})
