const test = require('node:test');
const assert = require('node:assert');
const service = require('../src/services/dish.service');

const sample = { name: 'sample name', price: 'sample price', restaurantId: 'sample restaurantId', isVeg: 'sample isVeg' };

test('Dish: create and fetch', () => {
  const created = service.create(sample);
  assert.ok(created.id);
  assert.strictEqual(service.get(created.id).id, created.id);
});

test('Dish: update', () => {
  const created = service.create(sample);
  const updated = service.update(created.id, { name: 'updated' });
  assert.strictEqual(updated.name, 'updated');
});

test('Dish: list is paginated', () => {
  const result = service.list({ page: 1, limit: 1 });
  assert.strictEqual(result.limit, 1);
  assert.ok(result.items.length <= 1);
});

test('Dish: remove then 404', () => {
  const created = service.create(sample);
  service.remove(created.id);
  assert.throws(() => service.get(created.id), (err) => err.status === 404);
});
