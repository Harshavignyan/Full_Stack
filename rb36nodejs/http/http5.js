var http = require("http")
var fs = require("fs")
var url = require("url")
var path = require("path")

http.createServer((req,res) => {
    console.log("req received",req.url)
    var myurl = url.parse(req.url)
    var y = path.parse(myurl.path)
    // fs.readFile("home.html", (err,bff) => {
    //     res.write(bff.toString())
    //     res.end()
    // })

    // console.log(myurl)

    if(req.url==="/" || req.url==="/favicon.ico"){
        fs.readFile("home.html", (err,bff) => {
                res.write(bff.toString())
                res.end()
        })
    }
    else{
        fs.readFile(y.base,(err,bff) => {
            res.write(bff.toString())
            res.end()
        })
    }
    // if(req.url==="/testfile2.html"){
    //     fs.readFile("testfile2.html", (err,bff) => {
    //         res.write(bff.toString())
    //         res.end()
    //     })
    // } 
}).listen(8026)


// implemented using sync