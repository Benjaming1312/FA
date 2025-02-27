const mshop_title_list = [
  '.module-login',
  '.module-forgetpsw',
  '.module-register',
  '.module-memmenu',
  '.module-changepwd',
  '.module-viewcart',
  '.module-formlist',
  '.module-orderlist',
  '.module-consignee.module-consignee',
  '.module-billto',
  '.module-submitorder',
  '.module-',
  '.md_middle',
  '.module-favlist',
  '.module-fa',
  '.module-billto'
]

module.exports = function () {
  mshop_title_list.forEach(function (class_name) {
    const title = $(class_name).children('.mt').children('h3').text().trim()
    if (title === '') {
      return false
    }
    const template = `<div class="page container-fluid page-title">
    <div class="row">
      <div class="col-xs-12">
        <div class="module-title">
          <h4>${title}</h4>
        </div>
      </div>
    </div>
  </div>`
    $(class_name).children('.mt').html(template)
  })
}