const scroll_top = require('./scroll_to')
module.exports = function () {
  $('.gotop').on('click', function () {
    scroll_top(0)
  })
}