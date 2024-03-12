const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../utils/mongoose');
class SiteController {
    //[GET] /
    async index(req, res, next) {
        try {
            const courses = await Course.find({});
            res.render('home', {
                courses: multipleMongooseToObject(courses),
            });
        } catch (error) {
            (error) => {
                next(error);
            };
            res.status(400).json({ err: 'ERROR!!!' });
        }
    }

    //[GET] / search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
