var http = require("http");

http.createServer((req,res) => {
    console.log("Hi, A request recieved!")
    res.write("How are you doing");
    res.write("<b>I'm boldly executed</b>")

    // it is not giving a bold o/p, why?


    res.end()
}).listen(8022)