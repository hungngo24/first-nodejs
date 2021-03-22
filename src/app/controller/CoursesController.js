const Course = require('../models/Course')
class CoursesController  {
    show (req, res){

        const slug = req.params.slug
        Course.findOne({slug}).lean()
        .then(course =>{
            res.render('course/detailCourse',{
                course
            })
        })
        
    }
}

module.exports = new CoursesController; 