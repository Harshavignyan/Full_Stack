const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema
const caratoSchema = new Schema({
    "user": { type: 'String' },
    "number": { type: 'String' },
    "email": { type: 'String' },
    "pwd": { type: 'String' },
    "reviews":[String]
});

var CaratoID = mongoose.model('CaratoID', caratoSchema);
module.exports = CaratoID