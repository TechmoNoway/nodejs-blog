const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', { courses: multipleMongooseToObject(courses) });
            })
            .catch((error) => next(error));
    }

    search(req, res) {
        res.render('search');
    }

    loadAPI(req, res, next) {
        Course.find({})
            .then((course) => res.json(course))
            .catch((error) => next(error));
    }
}

module.exports = new SiteController();
