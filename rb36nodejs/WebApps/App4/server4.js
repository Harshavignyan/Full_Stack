var express = require("express")
var mongoose = require("mongoose")
var app = express()
var courses = require("./public/courses.model")
var users = require("./public/users.model")
var admins = require("./public/admins.model")
var bodyparser = require("body-parser")
const { Console } = require("console")
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
const cookieParser = require('cookie-parser')
// load the cookie-parsing middleware
app.use(cookieParser())

app.set("view engine", "pug")

// accessing the public file
app.use(express.static(__dirname + "/public"))

//*************************************
// ************ User Side ************
// ************************************

// a middlewear to check the credentials of the user wrt cookies
function usercheck(req, res, next) {

    if (req.cookies.username && req.cookies.pwd) {
        next()
    }
    else {
        res.sendFile(__dirname + "/public/login.html")
    }

    // next(); // <-- important!
}

// 1. to get the user home page
app.get("/",usercheck, (req, res) => {
    res.sendFile(__dirname + "/public/home.html")
})

// 2. to get the user login page
app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/public/login.html")
})

// 3. to get the user login-error page
app.get("/login-error", (req, res) => {
    res.sendFile(__dirname + "/public/login-error.html")
})

// 4. to get the user signup form
app.get("/signup", (req, res) => {
    res.sendFile(__dirname + "/public/signup.html")
})

// 5. to save the user signup details in the uesrs DB and redirect to user login page
app.post("/register", (req, res) => {
    mongoose.connect("mongodb://localhost:27017").then((data) => {
        var newUser = new users(req.body)
        console.log(req.body)
        newUser.save().then((req, res) => {
            console.log(req.query)
        })
        res.redirect("/login")
    })
})

// 6. to get the user dashboard wrt post method (new login)
app.post("/userdashboard", (req, res) => {
    // console.log(req.cookies)
    var usr = req.body.username;
    var pwd = req.body.pwd;
    mongoose.connect("mongodb://localhost:27017").then(() => {
        users.findOne({ username: usr, $and: [{ pwd: pwd }] }).then((data, error) => {
            if (data) {
                // console.log(data)
                res.cookie("username",data.username);
                res.cookie("pwd",data.pwd);
                res.render("dashboard.pug", { okay: data })
            }
            else {
                res.redirect("/login-error")
            }
        })
    })
})

// 7. to get the user dashboard wrt the cookies already present (old login)
app.get("/userdashboard", usercheck, (req, res) => {
    // console.log(req.cookies)
    var usr = req.cookies.username;
    var pwd = req.cookies.pwd;
    mongoose.connect("mongodb://localhost:27017").then(() => {
        users.findOne({ username: usr, $and: [{ pwd: pwd }] }).then((data, error) => {
            if (data) {
                // console.log(data)
                // res.cookie("username",data.username);
                // res.cookie("pwd",data.pwd);
                res.render("dashboard.pug", { okay: data })
            }
            else {
                res.redirect("/login-error")
            }
        })
    })
})

// app.get("/courses",usercheck, (req,res) => {
//     mongoose.connect("mongodb://localhost:27017").then((data) => {
        
//             courses.find({}).then((vachindicoursesinfo) => {
//                 // console.log(vachindicoursesinfo)
//                 res.render("courseswihtoutlogin.pug", { teeskomari: vachindicoursesinfo})
//             })
        
//     })
// })


// 8. to get list of all courses after the user login
app.get("/:sid/courses", usercheck, (req, res) => {
    mongoose.connect("mongodb://localhost:27017").then((data) => {
        users.findById(req.params.sid).then((veedeaauser) => {
            courses.find({}).then((vachindicoursesinfo) => {
                // console.log(vachindicoursesinfo)
                res.render("courses.pug", { teeskomari: vachindicoursesinfo, okay: veedeaauser })
            })
        })
    })
})

// 9. to get a certain course details wrt the user id and that course id
app.get("/:sid/courses/:cid", usercheck, (req, res) => {
    var idigoid = req.params.cid
    mongoose.connect("mongodb://localhost:27017").then((data) => {
        users.findById(req.params.sid).then((veedeaauser) => {
            courses.findById(idigoid).then((vachesaycoursedetails) => {
                res.render("ekcoursedetails.pug", { okay: veedeaauser, coursenipattuko: vachesaycoursedetails })
            })
        })
    })
})

// 10. to get the payment request of a certain course wrt the user id and course id to the admin
app.get("/:sid/courses/:cid/buy", usercheck, (req, res) => {
    mongoose.connect("mongodb://localhost:27017").then((data) => {
        users.findById(req.params.sid).then((veedeaauser) => {
            courses.findById(req.params.cid).then((vachesaycoursedetails) => {
                if (vachesaycoursedetails["courseprice"] == 0) {
                    users.findByIdAndUpdate({ _id: req.params.sid }, { $push: { "courses": req.params.cid } }).then((freecoursemari) => {
                        res.send("go back and check your dashboard")
                    })
                }
                else {
                    users.findByIdAndUpdate({ _id: req.params.sid }, { $push: { "purchases": req.params.cid } }).then((freecoursemari) => {
                        res.send("Waiting for admin approval")
                    })
                }
            })
        })
    })
})

// 11. to get the course videos after subscribing
app.get("/viewcourse/:cid", usercheck, (req,res) => {
    mongoose.connect("mongodb://localhost:27017").then((data) => {
        courses.findById(req.params.cid).then((courseinfovideoki) => {
            res.render("coursevideos.pug",{coursevideos : courseinfovideoki})
        })
    })
})

// 12. to get the user logout and clear the existing cookies
app.get('/logout', (req, res) => {
    // Clear the cookies by setting them to an empty string and setting their expiration date to the past
    res.clearCookie('username');
    res.clearCookie('pwd');
  
    // Optional: Redirect to login page or send a response
    res.send('Logged out successfully');
});

//*************************************
// ************ Admin Side ************
// ************************************

// 1. to get the home page for admin
app.get("/admin/home", (req, res) => {
    res.sendFile(__dirname + "/public/admin_home.html")
})

// 2. to get the login page for admin
app.get("/admin/login", (req, res) => {
    res.sendFile(__dirname + "/public/admin_login.html")
})

// 3. to get the login-error page for admin
app.get("/admin-login-error", (req, res) => {
    res.sendFile(__dirname + "/public/admin-login-error.html")
})

// 4. to get the signup page for the admin
app.get("/admin_signup", (req, res) => {
    res.sendFile(__dirname + "/public/admin_signup.html")
})

// 5. to get the signup details of the admin to admins collection in the DB and redirect to admin login page
app.post("/admin_register", (req, res) => {
    mongoose.connect("mongodb://localhost:27017").then((data) => {
        var newAdmin = new admins(req.body)
        console.log(req.body)
        newAdmin.save().then((req, res) => {
            console.log(req.query)
        })
        res.redirect("/admin/login")
    })
})

// middlewear to check the cookies of admin and get the dashboard respectively
function admincheck(req, res, next) {

    if (req.cookies.username && req.cookies.pwd) {
        next()
    }
    else {
        res.sendFile(__dirname + "/public/admin_login.html")
    }

    // next(); // <-- important!
}

// 6. to get the admin dashboard wrt the post details from the admin login page (new login)
app.post("/admin_dashboard", (req, res) => {
    var usr = req.body.username;
    var pwd = req.body.pwd;
    mongoose.connect("mongodb://localhost:27017").then(() => {
        users.find({}).then((userdataidi) => {
            admins.findOne({ username: usr, $and: [{ pwd: pwd }] }).then((admindata, error) => {
                if (admindata) {
                    res.cookie("username",admindata.username);
                    res.cookie("pwd",admindata.pwd);
                    res.render("admin_dashboard.pug", { okay: admindata, userokay: userdataidi })
                }
                else {
                    res.redirect("/admin-login-error")
                }
            })
        })
    })
})

// 7. to get the admin dashboard wrt the cookies (old admin login)
app.get("/admin_dashboard", admincheck, (req, res) => {
    var usr = req.cookies.username;
    var pwd = req.cookies.pwd;
    mongoose.connect("mongodb://localhost:27017").then(() => {
        users.find({}).then((userdataidi) => {
            admins.findOne({ username: usr, $and: [{ pwd: pwd }] }).then((admindata, error) => {
                if (admindata) {
                    res.render("admin_dashboard.pug", { okay: admindata, userokay: userdataidi })
                }
                else {
                    res.redirect("/admin-login-error")
                }
            })
        })
    })
})

// 8. to get the course creating form of the admin
app.get("/admin/:aid/makecourse", admincheck, (req, res) => {
    res.sendFile(__dirname + "/public/formforcourses.html")
})

// 9. to save the new course in the courses collection of the DB created by the admin
app.post("/newcourse", admincheck, admincheck, (req, res) => {
    mongoose.connect("mongodb://localhost:27017").then((data) => {
        var newCourse = new courses(req.body)
        newCourse.save().then((addacoursedata) => {
            res.send("New Course Added :)")
        })
    })
})

// 10. to get the info of a certain user to the admin 
app.get("/admin_dashboard/:id", admincheck, (req, res) => {
    mongoose.connect("mongodb://localhost:27017").then((data) => {
        users.findById(req.params.id).then((userinfoteesko) => {
            courses.find({}).then((course) => {
                res.render("eachusercourse.pug", { courseinfopattuko: course, userinfopattuko: userinfoteesko })
            })
        })
    })
})

// 11. to update the course in the user collection coruses field after the admin approves the request
app.get("/approve/:sid/:cid", admincheck, (req, res) => {
    mongoose.connect("mongodb://localhost:27017").then((data) => {
        users.findByIdAndUpdate({ _id: req.params.sid }, { $push: { "courses": req.params.cid } }).then((useridpattuko) => {
            res.send("course ni add chesa db lo check chey")
        })
    })
})

// 12. to update the course in the user collection coruses field after the admin declines the request
app.get("/decline/:sid/:cid", admincheck, (req, res) => {
    mongoose.connect("mongodb://localhost:27017").then((data) => {
        users.findByIdAndUpdate({ _id: req.params.sid }, { $pull: { purchases: req.params.cid } }).then((useridmallipattuko) => {
            res.send("course ni tesesa db lo check chey")
        })
    })
})

// 13. to get the present admin logged out
app.get('/admin_logout', (req, res) => {

    // Clear the cookies by setting them to an empty string and setting their expiration date to the past
    res.clearCookie('username');
    res.clearCookie('pwd');
  
    // Optional: Redirect to login page or send a response
    res.send('Logged out successfully');

});

// server running on:
app.listen(7272)