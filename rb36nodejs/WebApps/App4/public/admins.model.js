const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema
const adminSchema = new Schema({
    "email": { type: 'String' },
    "pwd": { type: 'String'},
    "username": { type: 'String'},
    "contact":{type: 'String'}
});

var Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin