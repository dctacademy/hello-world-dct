const http = require('http');

const server = http.createServer(function(req, res) {
    if(req.url === '/') {
        res.end('Welcome to the site')
    }
})

server.listen(3001, function() {
    console.log('Listening on port 3001');
})