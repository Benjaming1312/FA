const is = require('../is')
module.exports = function () {

  $('.dropdown-submenu .sub-toggle').on('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    $(this).parent().toggleClass('open')
  })

  if ($(window).width() > 768) {
    $('.dropdown-toggle').click(function (e) {
      const url = $(this).attr('href')
      e.preventDefault()
      e.stopPropagation()
      window.location.href = url
    })
  }
  if ($(window).width() < 768) {
    return
  }

  $('.dropdown-menu > li').each(function () {
    const url = window.location.href
    const child = $(this).children('a')
    if (child.hasClass('sub-toggle')) {
      const drop_menu = $(this)
      $(this).find('ul li').each(function () {
        const child_href = $(this).find('a').attr('href')
        if (url.indexOf(child_href) >= 0) {
          $(this).addClass('focus')
          drop_menu.addClass('focus')
        }
      })
    }
    else {
      const href = child.attr('href')
      if (url.indexOf(href) >= 0) {
        $(this).addClass('focus')
      }
    }
  })
}