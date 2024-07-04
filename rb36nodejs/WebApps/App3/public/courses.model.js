const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema
const courseSchema = new Schema({
    "name": { type: 'String' },
    "tutor": { type: 'String' },
    "duration": { type: 'String'},
    "price": { type: 'String'}
});

var Course = mongoose.model('Course', courseSchema);
module.exports = Course