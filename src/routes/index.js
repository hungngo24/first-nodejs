const  newsRouter = require('./news.route')
const  clientRouter = require('./client.route')
const  coursesRouter = require('./courses.route')
function route(app){
    app.use('/news',newsRouter)
    app.use('/courses',coursesRouter)
    app.use('/',clientRouter)

}
module.exports = route;