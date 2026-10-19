const test = require('node:test');
const assert = require('node:assert');
const service = require('../src/services/ticket.service');

const sample = { userId: 'sample userId', subject: 'sample subject', message: 'sample message', status: 'sample status' };

test('Ticket: create and fetch', () => {
  const created = service.create(sample);
  assert.ok(created.id);
  assert.strictEqual(service.get(created.id).id, created.id);
});

test('Ticket: update', () => {
  const created = service.create(sample);
  const updated = service.update(created.id, { userId: 'updated' });
  assert.strictEqual(updated.userId, 'updated');
});

test('Ticket: list is paginated', () => {
  const result = service.list({ page: 1, limit: 1 });
  assert.strictEqual(result.limit, 1);
  assert.ok(result.items.length <= 1);
});

test('Ticket: remove then 404', () => {
  const created = service.create(sample);
  service.remove(created.id);
  assert.throws(() => service.get(created.id), (err) => err.status === 404);
});
