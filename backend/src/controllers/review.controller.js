// Review controller - maps HTTP requests to the Review service
const service = require('../services/review.service');

const wrap = (handler) => (req, res, next) => {
  try {
    handler(req, res);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  list: wrap((req, res) => res.json(service.list(req.query))),
  get: wrap((req, res) => res.json(service.get(req.params.id))),
  create: wrap((req, res) => res.status(201).json(service.create(req.body))),
  update: wrap((req, res) => res.json(service.update(req.params.id, req.body))),
  remove: wrap((req, res) => res.json(service.remove(req.params.id))),
};
