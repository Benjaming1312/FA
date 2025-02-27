const scroll_to = require('./lib/scroll_to')
const is_mb = require('./lib/is_mb')

module.exports = () => {
  $('.navbar-nav a').click(function () {
    const href = $(this).attr('href')
    scroll_to(href)
    if (is_mb) {
      $('.navbar-toggle').click()
    }
  })
}