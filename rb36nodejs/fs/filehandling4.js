var fs = require("fs");

fs.writeFileSync("companies.txt", "Microsoft, Edupoly, Acko, Adobe, OPEN AI, NVIDIA")

fs.readFile("companies.txt", (err,bff) => {
    if(err){
        console.log("error occured", err);
    }
    else{
        console.log(bff.toString());
    }
})

// , Acko, Adobe, OPEN AI
// writing the file first (which overrieds the old data)
// and then reading it asyncly