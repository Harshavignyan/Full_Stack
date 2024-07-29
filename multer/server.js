const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()

app.use(express.static(__dirname + "/public/index.html"))

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log(req.file, req.body)
    res.send("file and body received")
})

app.listen("9999", () => {
    console.log("server running on 9999")
})