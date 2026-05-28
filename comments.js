// create a web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

var comments = [];

http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url);
    if (parsedUrl.pathname === '/comments' && req.method === 'POST') {
        var body = '';
        req.on('data', function (chunk) {
            body += chunk;
        });
        req.on('end', function () {
            var comment = querystring.parse(body).comment;
            comments.push(comment);
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({success: true}));
        });
    } else if (parsedUrl.pathname === '/comments' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(comments));
    } else {
        fs.readFile('./index.html', function (err, data) {
            if (err) {
                res.writeHead(500);
                res.end('Error loading index.html');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    }
}).listen(8080, function () {
    console.log('Server is listening on port 8080');
});