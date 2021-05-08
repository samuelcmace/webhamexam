const http = require('http');
const fs = require('fs');

const hostname = '0.0.0.0';
const port = 3000;

const indexHTML = fs.readFileSync('html/index.html', 'utf8');
const examHTML = fs.readFileSync('html/exam.html', 'utf8');
const indexCSS = fs.readFileSync('css/index.css', 'utf8');
const examCSS = fs.readFileSync('css/exam.css', 'utf8');

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  const url = request.url;
  switch (url)
  {
    case '/':
      response.setHeader('Content-Type', 'text/html');
      response.end(indexHTML);
      break;
    case '/exam':
      response.setHeader('Content-Type', 'text/html');
      response.end(examHTML);
      break;
    case '/index.css':
      response.setHeader('Content-Type', 'text/css');
      response.end(indexCSS);
      break;
    case '/exam.css':
      response.setHeader('Content-Type', 'text/css');
      response.end(examCSS);
      break;
  };
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
