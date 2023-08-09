// require related modules
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const generatePassword = require('./generate')
const port = process.env.PORT || 3000

// set template engine
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'main' }))
app.set('view engine', 'hbs')

// use body-parser
app.use(express.urlencoded ({ extended: true }))

// routers
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const option = req.body
  const password = generatePassword(option)
  res.render('index', { password, option })
})

// start server
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})