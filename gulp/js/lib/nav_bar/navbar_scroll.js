const is = require('../is')
const get_nav_height = require('./get_nav_height')

module.exports = function () {
  const nav_height = get_nav_height()
  $(window).on('scroll', function () {
    setTimeout(() => {
      const top = $(window).scrollTop()
      if (top > nav_height) {
        $('nav.navbar').addClass('scroll')
      }
      else {
        $('nav.navbar').removeClass('scroll')
      }
    });
  })

  if (is('.module-adv')) {
    $('.module-adv').attr('style', `margin-top: ${nav_height}px`)
  }
  else {
    $('body').attr('style', `margin-top: ${nav_height}px`)
  }
}