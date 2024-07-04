var express = require("express")
var app = express()
app.set("view engine", "pug")
var mongoose = require("mongoose")
var Info = require("./public/info.model")
const { text } = require("body-parser")

app.use(express.static(__dirname + "/public"))

app.get("/submit", (req,res) => {
    mongoose.connect("mongodb://localhost:27017").then(() => {
        var newInfo = new Info(req.query)
        newInfo.save().then(() => {
            console.log("sent")
        })
    })
    res.sendFile(__dirname + "/public/newsubmit.html")

})

app.get("/newentry", (req,res) => {
    res.sendFile(__dirname + "/public/home.html")
})

app.get("/infodata", (req,res) => {
    mongoose.connect("mongodb://localhost:27017").then(() => {
        Info.find({}).then((data) => {
            res.render("dyfile", {sampledata : data})
            // res.send(data)
        })
    })
})

app.get("/infodata/del/:id", (req,res) => {
    var id = req.params.id;
    mongoose.connect("mongodb://localhost:27017").then(() => {
        Info.findByIdAndDelete(id).then(() => {
            Info.find({}).then((data) => {
                res.render("deldyfile", {sampledata:data})
            })
        })
        })
            
})

app.get("/infodata/viewmore/:id", (req,res) => {
    var id = req.params.id;
    // console.log(id)
    mongoose.connect("mongodb://localhost:27017").then(() => {
        Info.findById(id).then((data2) => {
            res.render("viewmore", {viewdata : data2})
            // res.send(data)
        })
    })
})

app.get("/infodata/addmore/:id", (req,res) => {
    var id = req.params.id;
    mongoose.connect("mongodb://localhost:27017").then(() => {
        Info.findById(id).then((data4) => {
            res.render("addmore", {adddata : data4})
            // res.send(data)
        })
    })
})

app.get("/infodata/addinfo/takeinfo/:id", (req,res) => {
    var id = req.params.id;
    var text = req.query.text;
    mongoose.connect("mongodb://localhost:27017").then(() => {
        Info.findByIdAndUpdate(id,{$push:{text:text}}).then((finaldata) => {
            Info.findById(id).then((newdata) => {
                res.render("viewmore", {viewdata : newdata})
                // res.send(data)
            })
        })
        
    })
    
})

app.listen(6969)