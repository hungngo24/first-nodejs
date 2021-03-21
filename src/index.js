const express = require('express')
const morgan= require('morgan')
const path= require('path')
const exphbs  = require('express-handlebars')
const app = express()
const port = 3000

// morgan
app.use(morgan('combined'))

//express handlebars
app.engine('hbs', exphbs({
  extname:'.hbs'
}));

app.set('view engine', 'hbs');

app.set('views',path.join(__dirname,'resources','views'))

console.log("path:",path.join(__dirname,'resources','views'))

// 
app.use(express.static(path.join(__dirname,'public')))


app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})