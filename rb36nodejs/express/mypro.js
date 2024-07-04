// console.log("hello edupoly!")

// npm install express (always install express locally only not globally)

var express = require("express")

var app = express();

// we created an application

app.get("/", (req,res) => {
    console.log("Request received!")
    res.send("Hello Edupoly!")
})

// we created a route or path or end_point

app.get("/home.html", (req,res) => {
    console.log("Home.html")
    res.sendFile(__dirname+"/home.html")
})

// we created a route or path or end_point
app.listen(6969)

// doubts:
// why did we create an application and how is it diff from a server
// using http, we created a server and accessed the html files using readfile and etc
// here we are using get and other methods like sendfile and so
// what is the diff between them?
// Did we create server with the help of http createserver and then create end points using express on that server?
// does express dont need any exclusive mentioning of server and directly creates endpoints?
// how are http and this express servers diff?