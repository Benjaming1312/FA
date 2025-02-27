const is = require('../is')

module.exports = function (target = '.profile') {
  if (!is('.hdmenu')) {
    return
  }
  $('.hdmenu .nav.navbar-nav').appendTo($(target))
  $('.mnavbar').remove()
}