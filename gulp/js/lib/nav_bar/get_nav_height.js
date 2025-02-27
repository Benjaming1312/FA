module.exports = function get_nav_height () {
  let nav_height = $('nav.navbar').innerHeight()
  if (!nav_height || nav_height < 10) {
    setTimeout(() => {
      nav_height = get_nav_height()
    }, 100);
  }
  return nav_height
}