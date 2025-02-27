const is = require('./is')
module.exports = function () {
  if (!is('.nav-tabs')) {
    return
  }

  const url = window.location.href
  $('.nav-tabs a').each(function () {
    const href = $(this).attr('href')
    if (url.indexOf(href) >= 0) {
      $(this).parent('li').addClass('active')
    }
  }) 
}