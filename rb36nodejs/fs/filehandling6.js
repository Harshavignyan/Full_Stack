var fs = require("fs")

fs.writeFileSync("dummy.txt", "This is a dummy file :(");

var val = fs.readFileSync("dummy.txt");
console.log(val.toString());

fs.rmSync("dummy.txt");
console.log("RM successful!");

// we can also use promises package to readfile with then and catch methods
