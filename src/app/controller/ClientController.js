const Course = require('../models/Course')
class ClientController  {
    index (req, res){
        
        // Course.find({},(err,docs)=>{
        //     if(err) res.status(400).json({error:"ERROR !!!!"})
        //     res.json(docs)
        // })

        // Course.find({})
        // .then(courses => {
        //     courses = courses.map(course =>course.toObject())
        //     res.render('home',{courses,title:'Home Page'}
        //     )
        // })
        // .catch(err =>next(err))

        Course.find({}).lean()
        .then(courses => {
            res.render('home',{courses,title:'Home Page'})
        })
        .catch(err =>next(err))
        
    }
    about (req, res){
        res.render('about');
    }

    search (req, res){
        res.render('search');
    }
}

module.exports = new ClientController;