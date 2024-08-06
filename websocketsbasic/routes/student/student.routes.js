var express=require('express');
const { getAllStudents, addStudent } = require('./student.controller');
var router = express.Router();

router.get("/getAllStudents",getAllStudents)

router.get("/addStudent",addStudent)

router.get("/deleteStudent",(req,res)=>{
    res.send("Are you sure delete Student")
})

module.exports = router;