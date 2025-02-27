const is = require('../is')
const collapse_aside = require('./collapse_aside')
module.exports = function () {
  if (!is('.shop-list')) {
    return
  }

  collapse_aside()

  const inspect_list = [
    '.module-rcglist',
    '.module-cglist',
    '.module-ptlist',
    '.module-ecptdetail'
  ]
  inspect_list.forEach(class_name => {
    if (!is(class_name)) {
      return false
    }
    $(class_name).appendTo($('.shop-list .append'))
  })
}