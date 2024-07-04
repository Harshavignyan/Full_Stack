// Get File Information:
// Syntax
// Following is the syntax of the method to get the information about a file −

// fs.stat(path, callback)
// Parameters
// Here is the description of the parameters used −

// path − This is the string having file name including path.

// callback − This is the callback function which gets two arguments (err, stats) where stats is an object of fs.Stats type which is printed below in the example.

// Apart from the important attributes which are printed below in the example, there are several useful methods available in fs.Stats class which can be used to check file type. These methods are given in the following table.

// Sr.No.	Method & Description
// 1	
// stats.isFile()

// Returns true if file type of a simple file.

// 2	
// stats.isDirectory()

// Returns true if file type of a directory.

// 3	
// stats.isBlockDevice()

// Returns true if file type of a block device.

// 4	
// stats.isCharacterDevice()

// Returns true if file type of a character device.

// 5	
// stats.isSymbolicLink()

// Returns true if file type of a symbolic link.

// 6	
// stats.isFIFO()

// Returns true if file type of a FIFO.

// 7	
// stats.isSocket()

// Returns true if file type of asocket.

// Example
// Let us create a js file named main.js with the following code −

// var fs = require("fs");

// console.log("Going to get file info!");
// fs.stat('input.txt', function (err, stats) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log(stats);
//    console.log("Got file info successfully!");
   
//    // Check file type
//    console.log("isFile ? " + stats.isFile());
//    console.log("isDirectory ? " + stats.isDirectory());    
// });
// Now run the main.js to see the result −

// $ node main.js
// Verify the Output.

// Going to get file info!
// { 
//    dev: 1792,
//    mode: 33188,
//    nlink: 1,
//    uid: 48,
//    gid: 48,
//    rdev: 0,
//    blksize: 4096,
//    ino: 4318127,
//    size: 97,
//    blocks: 8,
//    atime: Sun Mar 22 2015 13:40:00 GMT-0500 (CDT),
//    mtime: Sun Mar 22 2015 13:40:57 GMT-0500 (CDT),
//    ctime: Sun Mar 22 2015 13:40:57 GMT-0500 (CDT) 
// }
// Got file info successfully!
// isFile ? true
// isDirectory ? false