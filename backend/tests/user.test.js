const test = require('node:test');
const assert = require('node:assert');
const service = require('../src/services/user.service');

const sample = { name: 'sample name', email: 'sample email', phone: 'sample phone', role: 'sample role' };

test('User: create and fetch', () => {
  const created = service.create(sample);
  assert.ok(created.id);
  assert.strictEqual(service.get(created.id).id, created.id);
});

test('User: update', () => {
  const created = service.create(sample);
  const updated = service.update(created.id, { name: 'updated' });
  assert.strictEqual(updated.name, 'updated');
});

test('User: list is paginated', () => {
  const result = service.list({ page: 1, limit: 1 });
  assert.strictEqual(result.limit, 1);
  assert.ok(result.items.length <= 1);
});

test('User: remove then 404', () => {
  const created = service.create(sample);
  service.remove(created.id);
  assert.throws(() => service.get(created.id), (err) => err.status === 404);
});
