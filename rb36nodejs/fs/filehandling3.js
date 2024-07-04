var fs = require("fs");

fs.readFileSync("students.txt",(err, bff) => {
    if(err){
        console.log("error")
    }
    else{
        console.log(bff.toString())
    }
})

// this is an sync way of reading a file