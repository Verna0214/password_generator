// require related modules
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = process.env.PORT || 3000

// routers
app.get('/', (req, res) => {
  res.send('The project init.')
})

// start server
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})