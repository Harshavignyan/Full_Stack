var fs = require("fs")

fs.appendFile("companies.txt", " , Accenture, Oracle, Zomato, Swiggy", () => {

    {
        console.log("appedning done and the new values are: ");

        fs.readFile("companies.txt", (err,bff) => {
            if(err){
                console.log("error occured in reading", err);
            }
            else{
                console.log(bff.toString());
            }
        })
    }
})