const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');
const {Attendance} = require('../models');
const { Op, Sequelize } = require('sequelize');
const { syncAllAttendance } = require("../controllers/fetchAllDataFromSheet");


router.get('/sync', attendanceController.syncAttendance);


router.get('/', attendanceController.listAttendance);              // main attendance list (filtered, paginated)
router.get('/summary', attendanceController.attendanceSummary);    // dashboard stats summary
router.get('/absent', attendanceController.absentList);            // absent employees list
router.get('/employees', attendanceController.getEmployees);       // list of all employees

router.get('/syncAll', syncAllAttendance);


// router.post('/bulk-insert', attendanceController.bulkInsertAttendance);


// Add other endpoints here...
module.exports = router;
