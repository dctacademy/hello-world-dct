const http = require('http')
const server= http.createServer(function(request,response){
    if(request.url==='/'){
        response.end("so here's my number, call me maybe" );
    }
}
)
server.listen(3000,function(){
    console.log('server listen at 3000')
})
