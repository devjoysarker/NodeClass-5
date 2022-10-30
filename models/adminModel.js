
const mongoose = require('mongoose');


// Admin modle schma

const adminModle = mongoose.Schema({
    name :{
        type : String,
        require : [true,"Name fields are required"]
    },
    email : {
        type : String,
        require : [true,"Email fields is required"],
        unique : true
    },
    call : {
        type : String,
        require : [true,"Call Fields are Required"]
    },
    username : {
        type : String,
        require : [true,"username fields are required"],
        lowercase : true,
        minlength : 6,
        maxlength : 10
    },
    location : {
        type : String,
        require :false
    },
    skill : {
        type : String,
    },
    password : String
    
},{
    timestamps : true
})

// Export our modle
module.exports = mongoose.model('Admins',adminModle)