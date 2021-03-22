const  newsRouter = require('./news.route')
const  clientRouter = require('./client.route')

function route(app){
    app.use('/news',newsRouter)

    app.use('/',clientRouter)

}
module.exports = route;