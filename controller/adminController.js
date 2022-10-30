
const bcrypt = require('bcrypt');
const Admins = require('../models/adminModel')




// All Admin data 
const allAdminData = async (req,res) => {
    let data = await Admins.find();
    res.status(200).json(data);
}
// All Admin data 
const allSingleAdminData = async (req,res) => {
    let data = await Admins.findById(req.params.id);
    res.status(200).json(data);
}
// Create Admin data 
const createAdmin = async (req,res) => {
    const { name,email,call,location,password,skill,username } = req.body;
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt);
    if (!name || !email || !call || !password || !username) {
        res.status(400).json({
            message : "All Fields are required"
        });
    }else{
        await Admins.create({
            ...req.body,
            password : hashPassword
        })
        res.status(201).json({
            message : "Create Admins"
        })
    }
}
// Update Admin data 
const UpdataedAdmin = async (req,res) => {
    let id = req.params.id;
     await Admins.findByIdAndUpdate(id,req.body, {
        new : true
     });
     res.status(200).json({
        message : "Admins updated"
     })
}
// Delete Admin data 
const deleteAdmin = async (req,res) => {
    const Delete_data = Admins.findById(req.params.id);
    if ( !Delete_data) {
        res.status(400).json({
            message : "Admin data Not Found"
        })
    }else{
        const data = await Admins.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message : `Deletd ${data.name} data `
        })
    }
}
module.exports = {
    allAdminData,
    allSingleAdminData,
    createAdmin,
    UpdataedAdmin,
    deleteAdmin
}


