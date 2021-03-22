const express = require('express')
const morgan= require('morgan')// console.log sever
const path= require('path')
const exphbs  = require('express-handlebars')
const app = express()
const port = 3000
const cors = require('cors')


app.use(cors())

const route= require('./routes')

//db
const db = require('./config/db')
db.connect()
console.log("connect",db)

// morgan
app.use(morgan('combined'))

//express handlebars
app.engine('hbs', exphbs({
  extname:'.hbs'
}))

//middleware
app.use(express.urlencoded({extended:true})) // html

app.use(express.json()) //req = js


app.set('view engine', 'hbs');

app.set('views',path.join(__dirname,'resources','views'))

console.log("path:",path.join(__dirname,'resources','views'))

// 
app.use(express.static(path.join(__dirname,'public')))

route(app) 



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})