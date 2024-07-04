// query string params, form data, request payload : learn these

var express = require("express")
var app = express()
var mongoose = require("mongoose")
var CaratoID = require("./public/caratoid.model")

app.set("view engine","pug")

// when method is post, the payload will be of form data
// to read and process that, we need to follow diff approach

var bodyparser = require("body-parser")
const { Console } = require("console")
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.use(express.static(__dirname + "/public"))

app.get("/home", (req,res) => {
    res.sendFile(__dirname + "/public/home.html")
})

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/public/login.html")
})

app.get("/loginerror", (req, res) => {
    res.sendFile(__dirname + "/public/login-error.html")
})

app.get("/signinfile", (req, res) => {
    res.sendFile(__dirname + "/public/signin.html")
})

app.post("/signin", (req, res) => {
    mongoose.connect("mongodb://localhost:27017").then(() => {
        var newID = new CaratoID(req.body)
        newID.save().then((req, res) => {
            // console.log(req.query)
        })
    })
    res.sendFile(__dirname + "/public/login.html")

})

app.post("/info", (req, res) => {
    var usr = req.body.user;
    var pwd = req.body.pwd;
    mongoose.connect("mongodb://localhost:27017").then(() => {
        CaratoID.findOne({user: usr, $and: [{pwd: pwd}]}).then((data,error) => {
            // console.log(data[0].user)
            if(data){
                // console.log(data.user)
                res.render("dsboard.pug", {okay: data})
            }
            else{
                res.redirect("/login-error")
            }
        })
    })

})

app.get("/login-error", (req,res) => {
    res.redirect("/loginerror")
})

app.get("/review/:user", (req, res) => {
    var usr = req.params.user;
    mongoose.connect("mongodb://localhost:27017").then(() => {
        CaratoID.findOne({user:usr}).then((data) => {
            console.log(data)
            res.render("dsboard.pug",{okay:data})
        })
    })
});

app.listen(6969, function () { console.log("Server running on: 6969") })