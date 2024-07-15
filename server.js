require('dotenv').config()
const express = require('express')
const PORT = process.env.SERVER_PORT

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('hiiiii')
})

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