const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsWithDeleted({ deleted: true })])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch((error) => next(error));
    }

    trashCourses(req, res, next) {
        Course.findWithDeleted({ deleted: true })
            .then((trCourses) =>
                res.render('me/trash-courses', {
                    trCourses: multipleMongooseToObject(trCourses),
                }),
            )
            .catch((err) => next(err));
    }
}

module.exports = new MeController();
