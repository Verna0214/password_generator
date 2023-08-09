// require related modules
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
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
  console.log('req.body:', req.body)
  res.render('index')
})

// start server
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})