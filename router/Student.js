
const express = require('express');
const router = express.Router();

const { getllAllStudents, createStudent, updateStudents, deletedStudent, getllSingleAllStudents } = require("../controller/studentsControlle");

// Manage route
router.route('/').get(getllAllStudents).post(createStudent)
router.route('/:id').put( updateStudents ).patch(updateStudents).delete(deletedStudent)

// router.get('/', getllAllStudents);
// router.get('/:id',getllSingleAllStudents);
// router.post('/',createStudent);
// router.put('/:id',updateStudents)
// router.patch('/:id',updateStudents)
// router.delete('/:id',deletedStudent)




module.exports = router;