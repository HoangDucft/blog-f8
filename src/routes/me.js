const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/MeController');

// [GET] / me/storedCourse
router.get('/stored/courses', meController.storedCourses);

// [GET] / me/trash/courses
router.get('/trash/courses', meController.trashCourses);

module.exports = router;
