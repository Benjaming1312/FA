module.exports = function (target) {
  let top = target
  if (isNaN(Number(top))) {
    top = $(target).offset().top
  }
  $('html, body').animate({
    scrollTop: top
  }, 1000)
}