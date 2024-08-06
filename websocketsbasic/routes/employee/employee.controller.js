function getAllEmployees(req,res){
    res.send("We write business logic here")
}

function deleteEmployee(req,res){
    res.send("delete Employee LOgic from controller")
}

module.exports={
    getAllEmployees,
    deleteEmployee
}