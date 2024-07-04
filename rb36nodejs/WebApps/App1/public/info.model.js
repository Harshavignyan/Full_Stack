const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema
const infoSchema = new Schema({
    "name": { type: 'String' },
    "age": { type: 'String' },
    "contact": { type: 'String'},
    "text": {
        type: [Object], // Ensure this is defined as an array of strings
    },
});

var Info = mongoose.model('Info', infoSchema);
module.exports = Info