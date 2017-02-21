const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

webpack({
  entry: path.resolve(__dirname, './src/app.js'),
  output: {
    filename: 'webpack-bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // module: {
  //   rules: [{
  //     test: /\.jsx?$/,
  //     loader: 'babel-loader'
  //   }]
  // },
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
  console.log('file sie', fs.statSync(path.join(__dirname, 'dist/webpack-bundle.js')).size)
})
