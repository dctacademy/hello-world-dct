const http = require('http')
const server= http.createServer(function(request,response){
    if(request.url==='/'){
        response.end('hello world')

    } else if(request.url === '/contact'){
        response.end('contact information');
    } else if (request.url === '/about'){
        response.end('you have come to about page')
    }
}
)
server.listen(3000,function(){
    console.log('server listen at 3000')
})
