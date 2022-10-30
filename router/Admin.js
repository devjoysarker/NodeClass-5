

const express = require('express');
const { allAdminData, createAdmin, allSingleAdminData, UpdataedAdmin, deleteAdmin } = require('../controller/adminController');
const adminlogin = require('../controller/authContoller');

const router = express.Router();



// Create admin Route
router.get('/',allAdminData);
router.get('/:id',allSingleAdminData);
router.post('/',createAdmin);
router.put('/:id',UpdataedAdmin);
router.patch('/:id',UpdataedAdmin);
router.delete('/:id',deleteAdmin);

// Login Route
router.post('/login',adminlogin)

module.exports = router;

