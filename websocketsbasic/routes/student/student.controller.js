function getAllStudents(req,res){
    res.send("ALL Students are here")
}

function addStudent(req,res){
    res.send("Lets add Students")
}

module.exports={
    getAllStudents,
    addStudent
}