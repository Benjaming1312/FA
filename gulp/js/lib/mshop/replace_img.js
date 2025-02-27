const is = require("../is")

module.exports = function () {
  if (!is('.d-item')) {
    return
  }
  // if (is('.module-rcglist')) {
  //   return
  // }
  // if (is('.module-viewcart')) {
  //   return
  // }
  // if (is('.module-favlist')) {
  //   return
  // }
  // if (is('.module-cart')) {
  //   return
  // }
  // if (is('.module-orderlist')) {
  //   return
  // }
  // if (is('.page_mobilehome')) {
  //   return
  // }

  $('.d-img').each(function () {
    const src = $(this).find('img').attr('src')
    $(this).find('a').attr('style', `background: url(${src})`)
    $(this).find('img').hide()
  })
}