# Setting - service tests

Source file: `backend/tests/setting.test.js`

Part of the **backend** side of FoodDash.

## API
- `GET    /api/settings`      list (supports `page` and `limit`)
- `GET    /api/settings/:id`  fetch one
- `POST   /api/settings`      create (requires `key`, `value`)
- `PUT    /api/settings/:id`  update
- `DELETE /api/settings/:id`  delete

## Fields
- `key`
- `value`
- `scope`

