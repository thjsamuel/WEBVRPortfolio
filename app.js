const http = require('http');
const fs = require('fs');
const layout = require('aframe-layout').component;
//require('aframe-core').registerComponent('layout', layout)

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err, html) => {
  if (err)
  {
    throw err;
  }

  const server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write(html);
    res.end("super succ!")
  }).listen(port);

});
