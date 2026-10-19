const test = require('node:test');
const assert = require('node:assert');
const service = require('../src/services/cart.service');

const sample = { userId: 'sample userId', items: 'sample items', total: 'sample total' };

test('Cart: create and fetch', () => {
  const created = service.create(sample);
  assert.ok(created.id);
  assert.strictEqual(service.get(created.id).id, created.id);
});

test('Cart: update', () => {
  const created = service.create(sample);
  const updated = service.update(created.id, { userId: 'updated' });
  assert.strictEqual(updated.userId, 'updated');
});

test('Cart: list is paginated', () => {
  const result = service.list({ page: 1, limit: 1 });
  assert.strictEqual(result.limit, 1);
  assert.ok(result.items.length <= 1);
});

test('Cart: remove then 404', () => {
  const created = service.create(sample);
  service.remove(created.id);
  assert.throws(() => service.get(created.id), (err) => err.status === 404);
});
