const niv = require('npm-install-version')
const webpackVersion = `webpack@1.12`
console.log(`Installing ${webpackVersion}`)
niv.install(webpackVersion)

const webpack = niv.require('webpack')
const path = require('path')
const fs = require('fs')

webpack({
  entry: path.resolve(__dirname, './src/app.js'),
  output: {
    filename: 'webpack-1-bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    // loaders: [{
    //   test: /\.js$/,
    //   loader: 'babel-loader'
    // }]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   output: {
    //     comments: false
    //   }
    // })
  ]
}, (err, stats) => {
  if (err || stats.hasErrors()) {
    // Handle errors here
    throw err
  }
  // Done processing
  console.log('file sie', fs.statSync(path.join(__dirname, 'dist/webpack-1-bundle.js')).size)
})
