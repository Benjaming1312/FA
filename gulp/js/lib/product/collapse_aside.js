const is = require('../is')

module.exports = function (class_name) {
  if (!is(class_name)) {
    return
  }

  $('aside a').each(function () {
    const aTarget = $(this)
    const isTarget = window.location.href.indexOf(aTarget.attr('href')) >= 0
    let removeCollpased
    if (isTarget) {
      aTarget.addClass('active')
      aTarget.parents().each(function () {
        const collapse = $(this).attr('class')
        if (collapse && collapse.indexOf('collapse') >= 0) {
          $(this).addClass('in')
          removeCollpased = $(this).attr('id')

          if (removeCollpased) {
            $(`aside a[href="#${removeCollpased}"]`).removeClass('collapsed')
          }
        }
      })
    }
  })
}