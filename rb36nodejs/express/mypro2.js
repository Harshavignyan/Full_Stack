// console.log("hello edupoly!")

// npm install express (always install express locally only not globally)

var express = require("express")

var app = express();

app.use(express.static(__dirname+"/public"))


// we created an application

// app.get("/", (req,res) => {
//     console.log("Request received!")
//     res.send("Hello Edupoly!")
// })

// we created a route or path or end_point

// app.get("/home.html", (req,res) => {
//     console.log("Home.html");
//     res.sendFile(__dirname+"/home.html");
// });

// // we created a route or path or end_point

// app.get("/Designer.png", (req,res) => {
//     console.log("img req");
//     res.sendFile(__dirname+"/Designer.png");
// });


app.listen(6969)
