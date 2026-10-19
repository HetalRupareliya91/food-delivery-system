const test = require('node:test');
const assert = require('node:assert');
const service = require('../src/services/invoice.service');

const sample = { orderId: 'sample orderId', amount: 'sample amount', tax: 'sample tax', issuedAt: 'sample issuedAt' };

test('Invoice: create and fetch', () => {
  const created = service.create(sample);
  assert.ok(created.id);
  assert.strictEqual(service.get(created.id).id, created.id);
});

test('Invoice: update', () => {
  const created = service.create(sample);
  const updated = service.update(created.id, { orderId: 'updated' });
  assert.strictEqual(updated.orderId, 'updated');
});

test('Invoice: list is paginated', () => {
  const result = service.list({ page: 1, limit: 1 });
  assert.strictEqual(result.limit, 1);
  assert.ok(result.items.length <= 1);
});

test('Invoice: remove then 404', () => {
  const created = service.create(sample);
  service.remove(created.id);
  assert.throws(() => service.get(created.id), (err) => err.status === 404);
});
