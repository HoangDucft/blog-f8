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

    async create(req, res, next) {
        res.render('courses/create');
    }

    async store(req, res, next) {
        try {
            const formData = req.body;
            formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
            const course = await new Course(formData);

            // đối với phương thức post thì cần phải save lại để lưu
            course.save();
            res.redirect('/');
        } catch (error) {
            (error) => {
                next(error);
            };
            res.status(400).json({ error: 'EROR !!!' });
        }
    }

    async edit(req, res, next) {
        try {
            const course = await Course.findById(req.params.id);
            res.render('../../resources/views/courses/edit.hbs', {
                course: mongooseToObject(course),
            });
        } catch (error) {
            (error) => {
                next(error);
            };
            res.status(400).json({ error: 'EROR !!!' });
        }
    }

    async update(req, res, next) {
        try {
            const course = await Course.updateOne({ _id: req.params.id }, req.body);
            res.redirect('/me/stored/courses');
        } catch (error) {
            (error) => {
                next(error);
            };
            res.status(400).json({ error: 'EROR !!!' });
        }
    }

    async delete(req, res, next) {
        try {
            const course = await Course.delete({ _id: req.params.id });
            res.redirect('back');
        } catch (error) {
            (error) => {
                next(error);
            };
            res.status(400).json({ error: 'EROR !!!' });
        }
    }

    async forceDelete(req, res, next) {
        try {
            const course = await Course.deleteOne({ _id: req.params.id });
            res.redirect('back');
        } catch (error) {
            (error) => {
                next(error);
            };
            res.status(400).json({ error: 'EROR !!!' });
        }
    }

    async restore(req, res, next) {
        try {
            const course = await Course.restore({ _id: req.params.id });
            res.redirect('back');
        } catch (error) {
            (error) => {
                next(error);
            };
            res.status(400).json({ error: 'EROR !!!' });
        }
    }
}

module.exports = new CourseController();
