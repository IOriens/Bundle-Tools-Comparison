const SystemJS = require('systemjs')
const path = require('path')

// loads './app.js' from the current directory
SystemJS.import(path.resolve(__dirname, './src/app.js')).then(function (m) {
  console.log('done')
})
