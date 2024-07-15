request = require('../models').request

module.exports = {
  insert(req, res) {
    request.create(req.body)
      .then((newRequest) => {
        res.status(200).json(newRequest)
      })
      .catch((error) => {
        res.status(500).json(error)
      })
  }
}