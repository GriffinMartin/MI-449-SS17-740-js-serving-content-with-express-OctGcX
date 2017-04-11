var express = require('express')
var app = express()
var port = process.env.PORT || 8080

const pages = [
{url: '/ef', name: 'Electric Forest', img: '/img/ef.jpg', link: 'https://www.electricforestfestival.com/'},
{url: '/sb', name: 'Sonic Bloom', img: '/img/sb.jpg', link: 'http://sonicbloomfestival.com/'},
{url: '/un', name: 'UpNorth', img: '/img/un.jpg', link: 'https://www.upnorthfest.com/'}
]

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', function (request, response) {
  response.render('pages/index', {
    pages: pages
  })
})

pages.forEach(function (page) {
  app.get(page.url, function (request, response) {
    response.render('pages/festivals.ejs', {
      page: page
    })
  })
})

app.listen(port)
