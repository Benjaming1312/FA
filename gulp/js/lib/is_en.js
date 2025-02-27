const readCookie = require('./readCookie/index.js')
module.exports = (function () {
  const lang = readCookie('PageLang')
  return lang === 'en'
})()