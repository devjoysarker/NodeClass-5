
const mongoose = require('mongoose');

const studentModle = mongoose.Schema({
name : String,
age : String,
skill : String,
location : String
},
{
    timestamps : true 
}
)

module.exports = mongoose.model("studentsData",studentModle)