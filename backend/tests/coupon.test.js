const test = require('node:test');
const assert = require('node:assert');
const service = require('../src/services/coupon.service');

const sample = { code: 'sample code', discount: 'sample discount', minOrder: 'sample minOrder', expiresAt: 'sample expiresAt' };

test('Coupon: create and fetch', () => {
  const created = service.create(sample);
  assert.ok(created.id);
  assert.strictEqual(service.get(created.id).id, created.id);
});

test('Coupon: update', () => {
  const created = service.create(sample);
  const updated = service.update(created.id, { code: 'updated' });
  assert.strictEqual(updated.code, 'updated');
});

test('Coupon: list is paginated', () => {
  const result = service.list({ page: 1, limit: 1 });
  assert.strictEqual(result.limit, 1);
  assert.ok(result.items.length <= 1);
});

test('Coupon: remove then 404', () => {
  const created = service.create(sample);
  service.remove(created.id);
  assert.throws(() => service.get(created.id), (err) => err.status === 404);
});
