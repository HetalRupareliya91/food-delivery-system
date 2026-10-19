const test = require('node:test');
const assert = require('node:assert');
const service = require('../src/services/delivery.service');

const sample = { orderId: 'sample orderId', riderId: 'sample riderId', status: 'sample status', eta: 'sample eta' };

test('Delivery: create and fetch', () => {
  const created = service.create(sample);
  assert.ok(created.id);
  assert.strictEqual(service.get(created.id).id, created.id);
});

test('Delivery: update', () => {
  const created = service.create(sample);
  const updated = service.update(created.id, { orderId: 'updated' });
  assert.strictEqual(updated.orderId, 'updated');
});

test('Delivery: list is paginated', () => {
  const result = service.list({ page: 1, limit: 1 });
  assert.strictEqual(result.limit, 1);
  assert.ok(result.items.length <= 1);
});

test('Delivery: remove then 404', () => {
  const created = service.create(sample);
  service.remove(created.id);
  assert.throws(() => service.get(created.id), (err) => err.status === 404);
});
