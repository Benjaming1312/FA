module.exports = function (target, opts) {
	const options = {
		items: 1,
		autoplay: true,
		nav: false,
		dots: false,
		loop: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		autoPlaySpeed: 6500,
		autoPlayTimeout: 1500,
		smartSpeed: 5000,
		navText: [],
		autoplayHoverPause: false
	}
	Object.keys(opts).forEach(key => {
		options[key] = opts[key]
	})
	$(target).owlCarousel(options)
}