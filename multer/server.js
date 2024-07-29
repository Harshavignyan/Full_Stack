const express = require('express')
const multer = require('multer')
var fs = require("fs")
var bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + "/public/index.html"))

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html")
})

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        const path = `uploads/${req.body.username}/`
        if (!fs.existsSync(path)) {
            file.path = path
            fs.mkdirSync(path)
            callback(null, path)
          }
        else{
            file.path = path
            callback(null,path)
        }
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
})

const upload = multer({ storage: storage })

app.post('/profile', upload.single('avatar'), (req,res) => {
    console.log(req.file, req.body)
    res.send("file and body received")
})

app.listen("9999", () => {
    console.log("server running on 9999")
})