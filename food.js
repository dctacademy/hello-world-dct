const http = require('http')
const server= http.createServer(function(request,response){
    if(request.url==='/'){
        response.end('No food available here')
    }
  
}
)
server.listen(3000,function(){
    console.log('server listen at 3000')
})