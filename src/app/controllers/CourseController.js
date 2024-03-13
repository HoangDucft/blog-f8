const Course = require('../models/Course');
const { mongooseToObject } = require('../../utils/mongoose');
class CourseController {
    async show(req, res, next) {
        try {
            const course = await Course.findOne({ slug: req.params.slug });
            res.render('courses/show', {
                course: mongooseToObject(course),
            });
        } catch (error) {
            (error) => {
                next(error);
            };
            res.status(400).json({ error: 'Error !!!' });
        }
    }
}

module.exports = new CourseController();
