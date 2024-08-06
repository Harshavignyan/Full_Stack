var express = require('express');
const { getAllEmployees } = require('./employee.controller');
var router = express.Router();

router.get("/allEmployees",getAllEmployees)


module.exports=router;