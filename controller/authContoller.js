
const Admin = require('../models/adminModel');
const bcrypt = require('bcrypt');

const adminlogin = async (req,res) => {

    const { email,password } = req.body;
    // Check user by email
    const loginData = await Admin.findOne({ email });
    console.log(loginData);
    //Now validate email
    if ( !loginData ) {
        res.status(400).json({
            message : "Email Not found"
        })
    }
    if ( await bcrypt.compare(password,loginData.password)) {
        res.status(200).json({
            message : "Admin user login successful"
        })
    }else{
        res.status(400).json({
            message : "Worng passwor"
        })
    }

}
//Auth Exports
module.exports = adminlogin