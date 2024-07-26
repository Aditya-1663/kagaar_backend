const connectTomongo = require("./db")
const express = require('express')
var cors = require('cors')
require('dotenv').config();
var app = express()
app.use(cors())
const port = process.env.PORT || 5000;
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  connectTomongo()
  console.log(` listening on port ${port}`)
})