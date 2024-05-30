const http = require('http');
const server = http.createServer((req, res) => {
   if( req.url === "/"){
      res.end("Hello, world!");
   }
   if(req.url ==='/about'){
      res.end("Home page about")
   }
   //error
   res.end(`<p>Hi My  name is veera Jaswanth</p> 
   <a href="/"> back Home</a>
   `);
   
   
   
})
server.listen(5000)