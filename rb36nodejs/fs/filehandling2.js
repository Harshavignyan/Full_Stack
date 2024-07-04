var fs = require("fs");

fs.readFile("students.txt",(err, bff) => {
    if(err){
        console.log("error")
    }
    else{
        console.log(bff.toString())
    }
})

// this is an async way of reading a file