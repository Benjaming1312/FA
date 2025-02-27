const is = require('../is')

module.exports = function () {
  if (!is('.mshop_remove')) {
    return
  }
  const list = $('.mshop_remove').data('list').split(',')
  console.log('%c (／‵Д′)／~ ╧╧ list : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff', list)
  list.forEach(function (class_name) {
    console.log('%c (／‵Д′)／~ ╧╧ class_name : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff', class_name)
    $(`.${class_name.trim()}`).remove()
  })
}
