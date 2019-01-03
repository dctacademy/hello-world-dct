const http = require('http')
const server= http.createServer(function(request,response){
    if(request.url==='/'){
      response.end('hello from the other side, i must have called a thousand times, to tell you, im sorry, for everything that i did. LMAOOO just kidding ')
    }
  }
)
server.listen(3000,function(){
    console.log('server listen at 3000')
})
