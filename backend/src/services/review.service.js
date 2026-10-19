// Review service - business logic for Review records
const model = require('../models/review.model');

function notFound(id) {
  const err = new Error('Review ' + id + ' not found');
  err.status = 404;
  return err;
}

function list(query = {}) {
  const page = Math.max(parseInt(query.page, 10) || 1, 1);
  const limit = Math.min(Math.max(parseInt(query.limit, 10) || 20, 1), 100);
  return model.findAll({ page, limit });
}

function get(id) {
  const record = model.findById(id);
  if (!record) throw notFound(id);
  return record;
}

function create(data) {
  return model.create(data);
}

function update(id, data) {
  const record = model.update(id, data);
  if (!record) throw notFound(id);
  return record;
}

function remove(id) {
  if (!model.remove(id)) throw notFound(id);
  return { id, deleted: true };
}

module.exports = { list, get, create, update, remove };
