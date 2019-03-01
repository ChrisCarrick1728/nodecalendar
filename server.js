var http = require('http')
var app = require('./app.js')

function requestHandler(req, res) {
  //console.log(req.headers['host'])
  // Launch the app
  
  app(req, res)
}

var server = http.createServer(requestHandler)

server.listen(9000)
