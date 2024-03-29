const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

// [GET] /course/search
router.get('/create', courseController.create);

// [POST] /course/store
router.post('/store', courseController.store);

// [get] /course/:id/edit
router.get('/:id/edit', courseController.edit);

// [PUT] /course/:id
router.put('/:id', courseController.update);

// [DELETE] /course/:id  (soft delete)
router.delete('/:id', courseController.delete);

// [DELETE] /course/:id  (force delete)

router.delete('/:id/force', courseController.forceDelete);

// [PATCH] /course/:id/restore
router.patch('/:id/restore', courseController.restore);

// [GET] /course/:slug
router.get('/:slug', courseController.show);

module.exports = router;
