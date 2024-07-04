const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema
const userSchema = new Schema({
    "firstname": { type: 'String' },
    "email": { type: 'String' },
    "password": { type: 'String'},
    "username": { type: 'String'},
    "courses" : {type: 'String'},
    "purchases" : {type: 'String'}
});

var User = mongoose.model('User', userSchema);
module.exports = User