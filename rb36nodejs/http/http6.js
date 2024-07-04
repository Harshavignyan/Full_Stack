var http = require("http")
var url = require("url")
var fs = require("fs")
var path = require("path")

http.createServer((req,res) => {
    console.log("Request has been received! \n")

    var myurl = url.parse(req.url)
    var mypath = path.parse(req.url)

    if(req.url === "/" || req.url === "/favicon.ico"){
        fs.readFile("funnyhome.html", (err,bff) => {
            res.write(bff.toString())
            res.end()
        })
    }
    else{
        fs.readFile(mypath.base,(err,bff) => {
            res.write(bff.toString())
            res.end()
        })
    }
}).listen(8069)