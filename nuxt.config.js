const {join} = require('path')

module.exports = {
  css: [
    'hover.css/css/hover-min.css',
    'bulma/css/bulma.css',
    join(__dirname, 'css/main.css')
  ]
}
