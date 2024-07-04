var http = require("http");

http.createServer((req,res) => {
    console.log("Hi, A request recieved!")
}).listen(8020)