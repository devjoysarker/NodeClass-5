
const studentsData = require('../models/studentdataModels')

// Get All Students
const getllAllStudents = async (req,res) => {
    let data = await studentsData.find();
    res.status(201).json(data)
}
// Get All singleStudents
const getllSingleAllStudents = async (req,res) => {
    let id = req.params.id ;
    let sing_data = await studentsData.findById(id);
    res.status(200).json(sing_data)
}
// Create Students
const createStudent = async (req,res) => {
    let data = await studentsData.create({
        name : req.body.name,
        skill : req.body.skill,
        age : req.body.age,
        location : req.body.location
    });
    res.status(201).json({
        message : "Students Data Create"
    })
}

// update student 
const updateStudents = async(req,res) => {
    let id = req.params.id;
    await studentsData.findByIdAndUpdate(id,req.body,{
        new : true
    });
    res.status(200).json({
        message : "Student Updated"
    })
}
// Deleted Student
const deletedStudent = async(req,res) => {
    let id = req.params.id;
    await studentsData.findByIdAndDelete(id);
    req.status(200).json({
        message : "Student delete Successful"
    })
}


module.exports = {
    getllAllStudents,
    getllSingleAllStudents,
    createStudent,
    updateStudents,
    deletedStudent
}