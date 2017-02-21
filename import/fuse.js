const fsbx = require('fuse-box')
const path = require('path')

// Create FuseBox Instance

const fuseBox = fsbx.FuseBox.init({
  // homeDir: path.join(__dirname, 'src'),
  homeDir: './import/src',
  outFile: path.join(__dirname, 'dist/fuse-bundle.js'),
  plugins: [
    fsbx.BabelPlugin({
      test: /\.js$/, // test is optional
      config: {
        sourceMaps: false,
        presets: ['es2015']
      }
    })
    // fsbx.UglifyJSPlugin({
    //   'compress': {
    //     warnings: false
    //   }
    // })
  ]
})

fuseBox.bundle('>app.js')
