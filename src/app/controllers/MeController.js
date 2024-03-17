const Course = require('../models/Course');
const { mongooseToObject, multipleMongooseToObject } = require('../../utils/mongoose');
class MeController {
    // [get] /me/stored/courses
    async storedCourses(req, res, next) {
        try {
            const courses = await Course.find({});
            res.render('../../resources/views/me/storedCourses', {
                courses: multipleMongooseToObject(courses),
            });
        } catch (error) {
            (error) => {
                next(error);
            };
            res.status(400).json({ error: 'EROR !!!' });
        }
    }
}

module.exports = new MeController();
