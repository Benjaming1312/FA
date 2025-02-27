const is = require('../is')
module.exports = function () {
  if (!is('.prod-info')) {
    return
  }
  $('.mpro-panel .mpro-name').after($('.prod-info'))
}