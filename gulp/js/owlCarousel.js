function owlcarouselfn(target,nav,dot) {
	$(target).owlCarousel({
		items: 1,
		autoplay:true,
		nav: nav,
		dots: dot,
		loop: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		autoPlaySpeed: 3000,
		autoPlayTimeout: 1500,
		// smartSpeed: 1500,
		autoplayHoverPause: false,
	})
}
const is = require('./is')

function calcBannerMarginTop () {
	const navH = $('nav.navbar').innerHeight()
  if ($('.idx').is('.idx')) {
    $('.banner').attr('style', `margin-top: ${navH + 11}px`)
  }
}

module.exports = function () {
	// calcBannerMarginTop()

	console.log('%c (／‵Д′)／~ ╧╧ is(banner) : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff', is('.banner'))
	if (is('.banner')) {
		$('.banner .owl-carousel').owlCarousel({
			items: 1,
			autoplay:true,
			nav: false,
			dots: true,
			loop: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			autoPlaySpeed: 6500,
			autoPlayTimeout: 1500,
			smartSpeed: 1500,
			autoplayHoverPause: false,
		})
	}
}

// $(function () {
//     $('.banner .owl-carousel').owlCarousel({
//         items: 1,
//         autoplay:true,
//         nav: false,
//         dots: true,
//         loop: true,
//         animateOut: 'fadeOut',
//         animateIn: 'fadeIn',
//         autoPlaySpeed: 5000,
//         autoPlayTimeout: 5000,
//         navText: [],
//         smartSpeed: 1500
//     })
//     // autoplayHoverPause: false,
//     // responsiveClass: true,
//     // responsive: {
//     //     0: {
//     //         items: 2,
//     //         nav: true,
//     //         margin: 15
//     //     },
//     //     440: {
//     //         items: 2,
//     //         nav:true,
//     //         margin: 15
//     //     },
//     //     768: {
//     //         items: 6,
//     //         nav:true,
//     //         margin: 15
//     //     },
//     // }
//     // $('.idx.section-2 .owl-carousel').owlCarousel({
//     //     autoplay:true,
//     //     nav: false,
//     //     dots: true,
//     //     loop: false,
//     //     animateOut: 'fadeOut',
//     //     animateIn: 'fadeIn',
//     //     autoPlaySpeed: 3000,
//     //     autoPlayTimeout: 1500,
//     //     smartSpeed: 1500,
//     //     autoplayHoverPause: false,
//     //     responsiveClass: true,
//     //     responsive: {
//     //         0: {
//     //             items: 1,
//     //             dots:true
//     //         },
//     //         440: {
//     //             items: 1,
//     //             dots:true
//     //         },
//     //         768: {
//     //             items: 2,
//     //             dots:true
//     //         },
//     //         1100: {
//     //             items: 4,
//     //             dots:true
//     //         },
//     //         1300: {
//     //             items: 4,
//     //             dots:true
//     //         }
//     //     }
//     // })
//     // owlcarouselfn('.idx.section-5 .owl-carousel', true, false)
//     // setTimeout( () => {
//     //     $('.idx.section-5 .owl-carousel .owl-prev').text('')
//     //     $('.idx.section-5 .owl-carousel .owl-next').text('')
//     // })
// })
 
// 商品推薦模組改輪播
// 商品推薦模組改輪播
// function owlMshop(target) {
//   var owl
//   // 判斷是否為推薦模組，如是mshop預設關聯性商品則直接使用
//   owl = $(target).find('.module-special')
//   if (owl.length === 0) {
//     owl = $('.module-relate')
//   }
//   owl.each(function () {
//     if ($(this).find('.listBS').attr('class').indexOf('listSlide') < 0) {
//       $(this).find('.mb').addClass('owl-carousel customSlide')
//       $(this).find('.row.listBS').addClass('item')
//     }
//   })
//   $('.customSlide').each(function () {
//     $(this).owlCarousel({
//       items: 4,
//       nav: true,
//       margin: 10,
//       dots: false,
//       loop: false,
//       responsiveClass:true,
//       responsive: {
//         0:{
//           items: 2,
//           nav: true,
//           margin: 10,
//           dots: false,
//           loop: false
//         },
//         600:{
//           items: 2,
//           nav: true,
//           margin: 10,
//           dots: false,
//           loop: false
//         },
//         1000:{
//           items: 4,
//           nav: true,
//           margin: 20,
//           dots: false,
//           loop: false
//         }
//       }
//     })
//   })
// }