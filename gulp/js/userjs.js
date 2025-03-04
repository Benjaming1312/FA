const aos_init = require('./lib/aos_init')
const owl_carousel = require('./lib/owl_carousel')
const go_top = require('./lib/go_top')
const nav = require('./nav')
// const append_profile = require('./lib/mshop/append_profile')
// const dropdown_menu = require('./lib/nav_bar/dropdown_menu')

$(function () {
  aos_init()
  go_top()
  nav()
  owl_carousel('.banner .owl-carousel', {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true
  })

  // await test()
  // append_profile()
  // dropdown_menu()
})