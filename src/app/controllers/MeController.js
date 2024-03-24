const Course = require('../models/Course');
const { mongooseToObject, multipleMongooseToObject } = require('../../utils/mongoose');
class MeController {
    // [get] /me/stored/courses
    async storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsWithDeleted({ deleted: true })])
            .then(([courses, deletedCount]) => {
                res.render('../../resources/views/me/storedCourses.hbs', {
                    deletedCount,
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch((error) => {
                next(error);
            });
    }

    // [get] /me/trash/courses
    async trashCourses(req, res, next) {
        try {
            const courses = await Course.findWithDeleted({ deleted: true });
            res.render('../../resources/views/me/trashCourses.hbs', {
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
