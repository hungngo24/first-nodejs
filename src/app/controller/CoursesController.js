const Course = require('../models/Course')
class CoursesController  {
    show (req, res,next){
        const slug = req.params.slug
        Course.findOne({slug}).lean()
        .then(course =>{
            res.render('course/detailCourse',{
                course
            })
        })
    }

    create (req, res){
        res.render('course/createCourse')
    }

    store (req, res){
        console.log(req.body)
        
        // Course.findOne({slug}).lean()
        // .then(course =>{
        //     res.render('course/detailCourse',{
        //         course
        //     })
        // })
    }
}

module.exports = new CoursesController; 