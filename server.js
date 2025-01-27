require('dotenv').config()
const express = require('express')
const cors = require('cors')
const models = require('./src/models')
const request = require('./src/controllers/requests')
const student = require('./src/controllers/students')

const PORT = process.env.SERVER_PORT

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('hello')
})

// ENDPOINTS
app.get     ('/api/students', student.index)

app.get     ('/api/requests', request.index)
app.post    ('/api/requests/insert', request.insert)
app.put     ('/api/requests/update/:id', request.update)
app.delete  ('/api/requests/delete/:id', request.delete)

app.listen(PORT, () => {
  models.sequelize
  .authenticate()
  .then(() => {
      console.log('Connection successful')
      console.log(`App listening on http://localhost:${PORT}`)
  })
  .catch((error) => {
      console.log("Error creating connection:", error)
  })
})