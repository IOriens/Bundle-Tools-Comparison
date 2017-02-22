var data = require('./data.js')

module.exports = {
  getName: function () {
    return data.firstName + ' ' + data.familyName
  }
}
