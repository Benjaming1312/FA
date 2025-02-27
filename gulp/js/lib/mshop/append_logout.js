const read_cookie = require('./read_cookie')
const is_mb = require('./is_mb.js')

module.exports = function () {
  const is_login = read_cookie('Cust')
  if (!is_login || is_login === '') {
    return
  }
  const html = `<a class="svg" href="/bin/index.php?Plugin=mobile&Action=mobilelogout" style="background:url(images/logout.svg); width: 18px; height: 18px;"></a>`
  if (is_mb) {
    $('.profile-content.visible-xs .user-profile .svg').eq(1).after(html)
    $('.profile-content.visible-xs .user-profile .svg').eq(1).attr('href', '/bin/index.php?Plugin=mobile&Action=mobilecmhome')
  } 
  else {
    $('.profile-content.hidden-xs .user-profile .svg').eq(0).after(html)
    $('.profile-content.hidden-xs .user-profile .svg').eq(0).attr('href', '/bin/index.php?Plugin=mobile&Action=mobilecmhome')
  }
}