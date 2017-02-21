var data = require('./data')

module.exports = {
  getName: function () {
    return data.firstName + ' ' + data.familyName
  }
}
