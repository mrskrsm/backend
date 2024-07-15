request = require('../models').request

module.exports = {
  index(req, res) {
    request.findAll()
      .then((requests) => {
        res.status(200).json(requests)
      })
      .catch((error) => {
        res.status(500).json(error)
      })
  },

  insert(req, res) {
    request.create(req.body)
      .then((newRequest) => {
        res.status(200).json(newRequest)
      })
      .catch((error) => {
        res.status(500).json(error)
      })
  },

  update(req, res) {
    request.save(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then((updatedRequest) => {
        res.status(200).json(updatedRequest)
      })
      .catch((error) => {
        res.status(500).json(error)
      })
  },

  delete(req, res) {
    request.destroy({ where: { id: req.params.id }})
      .then((deletedRequest) => {
        res.status(200).json(deletedRequest)
      })
      .catch((error) => {
        res.status(500).json(error)
      })

  }
}