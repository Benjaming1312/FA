const is = require('./is')
module.exports = function (class_name, option) {
  const opts = {
    // Show image per view
    slidesPerView: 'auto',
    // Space
    spaceBetween: 0,
    // Grab
    grabCursor: true,
    // Loop
    loop: true,
    // Auto play
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    // effect
    effect: 'fade',
    // navigation
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev'
    // },
    // Dot pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }
  Object.keys(option).forEach(key => {
    opts[key] = option[key]
  })

  // Append navigation
  if (opts.hasOwnProperty('navigation')) {
    $(class_name).append(`<div class="${opts.navigation.nextEl.replace('.', '')}"></div>`)
    $(class_name).append(`<div class="${opts.navigation.prevEl.replace('.', '')}"></div>`)
  }

  // Append dot
  if (opts.hasOwnProperty('pagination')) {
    $(class_name).append(`<div class="${opts.pagination.el.replace('.', '')}"></div>`)
  }


  if ($(window).width() > 768) {
    const swiper = new Swiper(class_name, opts)
  }
  else {
    const swiper = new Swiper(class_name, opts)
  }


  // Text-content
  // swiper.on('slideChange', function () {
  //   const content = new Promise((resolve, reject) => {
  //     gsap.fromTo('.text-content', {opacity: 0, x: 100}, {opacity: 1, x: 0})
  //     resolve()
  //   })

  //   content.then(() => {
  //     gsap.fromTo('.text-content h4', {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 3})
  //   })

  // })
}