const test = require('node:test');
const assert = require('node:assert');
const service = require('../src/services/setting.service');

const sample = { key: 'sample key', value: 'sample value', scope: 'sample scope' };

test('Setting: create and fetch', () => {
  const created = service.create(sample);
  assert.ok(created.id);
  assert.strictEqual(service.get(created.id).id, created.id);
});

test('Setting: update', () => {
  const created = service.create(sample);
  const updated = service.update(created.id, { key: 'updated' });
  assert.strictEqual(updated.key, 'updated');
});

test('Setting: list is paginated', () => {
  const result = service.list({ page: 1, limit: 1 });
  assert.strictEqual(result.limit, 1);
  assert.ok(result.items.length <= 1);
});

test('Setting: remove then 404', () => {
  const created = service.create(sample);
  service.remove(created.id);
  assert.throws(() => service.get(created.id), (err) => err.status === 404);
});
