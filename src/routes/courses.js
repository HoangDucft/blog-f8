const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

// [GET] / course/search
router.get('/search', courseController.search);

// [POST] / course/store
router.post('/store', courseController.store);

// [GET] / course/:slug
router.get('/:slug', courseController.show);

module.exports = router;
