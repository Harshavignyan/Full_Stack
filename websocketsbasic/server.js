require('dotenv').config();
var http = require("http");
var {Server} = require("socket.io")

var express = require('express');
var app = express();
var bodyParser=require('body-parser');
var server = http.createServer(app);
var io = new Server(server);
app.use(bodyParser.urlencoded({extends:false}));
console.log(process.env.USER_NAME)
var goals = {
    BRA:0,
    ARG:0
}
io.on("connection",function(socket){
    io.emit('update',goals)
    console.log("connected")
})
app.get("/inc/:country",function(req,res){
    goals[req.params.country]++;
    console.log(goals)
    io.emit('update',goals)
    res.send("HI")
})
app.use(express.static(__dirname+"/public"))
var studentRoutes = require('./routes/student/student.routes')
var employeeRoutes = require('./routes/employee/employee.routes')
app.use("/student",studentRoutes)
app.use("/employee",employeeRoutes)

server.listen(process.env.PORT||3900,()=>{console.log('running on '+(process.env.PORT||3900))})