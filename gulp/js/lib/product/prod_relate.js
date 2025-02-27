const owl_carousel = require('../owl_carousel')
module.exports = function () {
  $('.module-relate').append(`<div class="owl-carousel"></div>`)
  $('.module-relate .row.listBS').addClass('item')
  $('.module-relate .row.listBS').appendTo($('.module-relate .owl-carousel'))
  owl_carousel('.module-relate .owl-carousel', {
    nav: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: true,
            margin: 15
        },
        440: {
            items: 2,
            nav: true,
            margin: 15
        },
        768: {
            items: 4,
            nav: true,
            margin: 15
        },
    }
  })
}