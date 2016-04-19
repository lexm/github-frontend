var requestProxy = require('express-request-proxy'),
  express = require('express'),
  // port = process.env.PORT || 3001,
  app = express();

var proxyGitHub = function(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: 'https://api.github.com/' + request.params[0],
    headers: { Authorization: 'token ' + process.env.GITHUB_TOKEN }
  }))(request, response);
};

// app.get('/github/*', proxyGitHub);


app.use(express.static(__dirname + '/public')).listen(8080, () => console.log('up on 8080'));
