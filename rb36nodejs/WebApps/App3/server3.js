var express = require("express")
var mongoose = require("mongoose")
var app = express()
var courses = require("./public/courses.model")
var users = require("./public/users.model")
var bodyparser = require("body-parser")
const { Console } = require("console")
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.set("view engine", "pug")


app.use(express.static(__dirname + "/public"))

// to get the home.html page, we write an endpoint

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/home.html")
})

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/public/login.html")
})

app.get("/login-error", (req, res) => {
    res.sendFile(__dirname + "/public/login-error.html")
})

app.post("/signup", (req, res) => {

    mongoose.connect("mongodb://localhost:27017").then(() => {
        var newUser = new users(req.body)
        newUser.save().then((req, res) => {
            // console.log(req.query)
        })
    })
    res.sendFile(__dirname + "/public/login.html")
})

app.post("/info", (req, res) => {
    var usr = req.body.username;
    var pwd = req.body.password;
    mongoose.connect("mongodb://localhost:27017").then(() => {
        users.findOne({username: usr, $and: [{password: pwd}]}).then((data,error) => {
            // console.log(data[0].user)
            if(data){
                // console.log(data.user)
                res.render("dashboard.pug", {okay: data})
            }
            else{
                res.redirect("/login-error")
            }
        })
    })

})

// to get to the courses page after clicking the link
// here is the end point
// lets assume that even to view the courses list, one needs to be loggined in

// so writing a middlewear to check if they have username and pwd or not

const cookieParser = require('cookie-parser')
// load the cookie-parsing middleware
app.use(cookieParser())

function check(req, res, next) {
    console.log("i'll check if there are username and pwd in cookies or not")
    if (req) {
        console.log("values are there, you can go ahead")
        next()
    }
    else {
        console.log("values are not there, still continue for time being")
        next()
    }
}

app.get("/courses", check, (req, res) => {
    courseconnect.then((data) => {
        courses.find().then((alldata) => {
            console.log("ill give the all courses info")
            // res.render("courses.pug", {coursesinfo : alldata})
            res.send("courses")
        })
    })
})

app.get("/courses/:cid", check, (req, res) => {
    var thatcid = req.params.id
    courseconnect.then((data) => {
        courses.findById(thatcid).then((thatcoursedata) => {
            console.log("you are viewing a particular course details :)")
            // res.render("coursedetails.pug", {thatcoursedata : thatcoursedata})
            res.send("viewing a particular course")
        })
    })
})

app.get("/subscribe", check, (req, res) => {
    var thatcid = req.params.id
    courseconnect.then((data) => {
        courses.findById(thatcid).then((thatcoursedata) => {
            if (thatcoursedata["price"] == "free") {
                console.log("subscribing a free course")
                // res.render("dashboard.pug", {courseinfo : data})
                res.send("subscirbed a free course")
            }
            else {
                res.redirect("paymentgateway.html")
            }
        })
    })
})

app.post("/pay", check, (req, res) => {
    var thatcid = req.body.cid
    var thatuid = req.body.uid

    userconnect.then((data) => {
        users.findOneAndUpdate(filter, update, options).then((thatuiddata) => {
            res.send("pampincha, aagu!")
            console.log("pampincha, aagu!")
        })
    })
})

app.listen(6969, function () { console.log("Server running on: 6969") })