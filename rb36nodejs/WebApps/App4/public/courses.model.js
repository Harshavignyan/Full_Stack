const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema
const courseSchema = new Schema({
    "coursename": { type: 'String' },
    "coursetrainer": { type: 'String' },
    "courseduration": { type: 'String'},
    "courseprice": { type: 'String'},
    "courseprereq": ['String'],
    "courseurls": { type: 'String'},
});

var Course = mongoose.model('Course', courseSchema);
module.exports = Course