// Payment model - in-memory store for Payment records
const crypto = require('crypto');

const FIELDS = ['orderId', 'amount', 'method', 'status'];
const store = new Map();

function pick(data = {}) {
  const out = {};
  for (const f of FIELDS) if (data[f] !== undefined) out[f] = data[f];
  return out;
}

function create(data) {
  const now = new Date().toISOString();
  const record = { id: crypto.randomUUID(), ...pick(data), createdAt: now, updatedAt: now };
  store.set(record.id, record);
  return record;
}

function findAll({ page = 1, limit = 20 } = {}) {
  const all = [...store.values()];
  const start = (page - 1) * limit;
  return { items: all.slice(start, start + limit), total: all.length, page, limit };
}

function findById(id) {
  return store.get(id) || null;
}

function update(id, data) {
  const current = store.get(id);
  if (!current) return null;
  const next = { ...current, ...pick(data), updatedAt: new Date().toISOString() };
  store.set(id, next);
  return next;
}

function remove(id) {
  return store.delete(id);
}

module.exports = { FIELDS, create, findAll, findById, update, remove };
