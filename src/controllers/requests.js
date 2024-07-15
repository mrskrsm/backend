request = require('../models').request

module.exports = {
  insert(req, res) {
    request.create(req.body)
      .then((newRequest) => {
        res.status(200).json(newRequest)
      })
  }
}