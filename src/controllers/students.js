student = require('../models').student

module.exports = {
  index(req, res) {
    student.findAll()
      .then((students) => {
        res.status(200).json(students)
      })
      .catch((error) => {
        res.status(500).json(error)
      })
  }
}