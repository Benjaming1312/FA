const is = require('../is')

module.exports = function () {
  $('.mpro-preview.col-sm-5').append(`<div class="carousel-module">
      <div class="box">
        <div class="swiper-container main">
          <div class="swiper-wrapper">
        </div>
        
      </div>
        <div class="hash-link-container">
          <div class="hash-link swiper-container">
            <div class="wrapper">
            </div>
            </div>
        </div>
      </div>
    </div>`)

  $('.mpro-preview.col-sm-5 img').each(function (idx) {
    const link = $(this).attr('src')
    $('.swiper-container.main .swiper-wrapper').append(`<div class="swiper-slide" data-hash="prodOwl-${idx}" style="background: url(${link});"></div>`)

    $('.hash-link .wrapper').append(`<div class="swiper-slide"><a href="#prodOwl-${idx}" style="background: url(${link});" data-hash-src="${link}"></a></div>`)
  })

  setTimeout(() => {
    $('.hash-link a').each(function () {
      $(this).click(function (e) {
        e.preventDefault()
        e.stopPropagation()
        const link = $(this).data('hash-src')

        $('.swiper-container.main .swiper-wrapper .swiper-slide').eq(0).css('background', `url(${link})`)
      })
    })
  })
}