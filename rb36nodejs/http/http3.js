var http = require("http");

http.createServer((req,res) => {
    console.log("Hi, A request recieved!")

    res.setHeader("Content-Type", "application/json")

    var ob1 = {firstname:"praveen"}
    res.write(JSON.stringify(ob1));

    // res.setHeader() is a native method of Node.js and res.header() is an alias of res.set() 
    // method from Express framework.
    // This two methods do exactly the same thing, set the headers HTTP response. The only 
    // difference is res.setHeader() allows you only to set a singular header and res.header() 
    // will allow you to set multiple headers. So use the one fit with your needs.

    
    // res.setHeader("Content-Type", "text/html")

    // res.write("How are you doing");
    // res.write("<b>I'm boldly executed</b>")

    res.end()
}).listen(8024)

// doubt: why is it not working?