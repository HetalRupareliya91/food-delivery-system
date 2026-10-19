const test = require('node:test');
const assert = require('node:assert');
const service = require('../src/services/banner.service');

const sample = { title: 'sample title', imageUrl: 'sample imageUrl', link: 'sample link', active: 'sample active' };

test('Banner: create and fetch', () => {
  const created = service.create(sample);
  assert.ok(created.id);
  assert.strictEqual(service.get(created.id).id, created.id);
});

test('Banner: update', () => {
  const created = service.create(sample);
  const updated = service.update(created.id, { title: 'updated' });
  assert.strictEqual(updated.title, 'updated');
});

test('Banner: list is paginated', () => {
  const result = service.list({ page: 1, limit: 1 });
  assert.strictEqual(result.limit, 1);
  assert.ok(result.items.length <= 1);
});

test('Banner: remove then 404', () => {
  const created = service.create(sample);
  service.remove(created.id);
  assert.throws(() => service.get(created.id), (err) => err.status === 404);
});
