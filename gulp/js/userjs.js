// $(function () {
//     // owlcarouselfn('.banner .row .col-xs-12', false, true)
// })
// $('test').click((e) => {
//     return e ? true : false
// })
// import owl from 'owlCarousel.js'
// const owlFn = require('./owlCarousel')
const aosInit = require('./aos')
const gotop = require('./scrollTo')
const swiperJS = require('./swiper/index.js')
const scollFn = require('./scrollTrigger/index.js')
const indexNews = require('./indexNews/index')

$(function () {
  aosInit()
  // owlFn()
  gotop()
  swiperJS()
  indexNews()
})

// owlFn()

// $(function () {
//   es6()
// })
