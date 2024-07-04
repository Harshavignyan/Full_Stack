var http = require("http")
var fs = require("fs")

http.createServer((req,res) => {
    console.log("request received\n")

    var filedata = fs.readFileSync("home.html")
    res.write(filedata.toString())


    var testfile = fs.readFileSync("testfile2.html")
    res.write(testfile.toString())

    
    res.end("okay, ended")
}).listen(8025)

// implemented using sync