const is = require('../is')
const sleep = require('../sleep')
const is_mb = require('../is_mb')

module.exports = function () {
  if (!is('.dropdown-menu') || is_mb) {
    return
  }

  get_menu().then(() => {
    align_menu()
  })
}

function get_menu () {
  return new Promise(resolve => {
    while ($('.dropdown-menu').eq(0).width() < 10) {
      sleep()
      console.log('sleep')
    }
    resolve()
  })
}

function align_menu () {
  $('.dropdown-menu').each(function () {
    const width = $(this).innerWidth()
    const parent_width = $(this).parent('.dropdown').find('a').width()
    console.log('%c (／‵Д′)／~ ╧╧ parent_width : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff', [width, parent_width])
    let left
    if (width > parent_width) {
      left = width - parent_width
    }
    else {
      left = parent_width - width
    }
    $(this).attr('style', `left: -${left / 2}px`)
  })
}