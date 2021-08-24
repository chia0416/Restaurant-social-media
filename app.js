const express = require('express')
const handlebars = require('express-handlebars')
const db = require('./models')
const flash = require('connect-flash')
const session = require('express-session')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}))

app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false}))
app.use(flash())

app.use((req, res, next) => {
  res.locals.success_messages = req.flash('success_message')
  res.locals.error_messages = req.flash('error_messages')
  next()
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// 引入 routes 並將 app 傳進去，讓 routes 可以用 app 這個物件來指定路由
// const router =require('./routes')
// router(app)
require('./routes')(app)
module.exports = app
