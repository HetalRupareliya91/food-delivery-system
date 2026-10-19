const test = require('node:test');
const assert = require('node:assert');
const service = require('../src/services/refund.service');

const sample = { orderId: 'sample orderId', amount: 'sample amount', reason: 'sample reason', status: 'sample status' };

test('Refund: create and fetch', () => {
  const created = service.create(sample);
  assert.ok(created.id);
  assert.strictEqual(service.get(created.id).id, created.id);
});

test('Refund: update', () => {
  const created = service.create(sample);
  const updated = service.update(created.id, { orderId: 'updated' });
  assert.strictEqual(updated.orderId, 'updated');
});

test('Refund: list is paginated', () => {
  const result = service.list({ page: 1, limit: 1 });
  assert.strictEqual(result.limit, 1);
  assert.ok(result.items.length <= 1);
});

test('Refund: remove then 404', () => {
  const created = service.create(sample);
  service.remove(created.id);
  assert.throws(() => service.get(created.id), (err) => err.status === 404);
});
