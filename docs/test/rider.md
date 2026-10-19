# Rider - service tests

Source file: `backend/tests/rider.test.js`

Part of the **backend** side of FoodDash.

## API
- `GET    /api/riders`      list (supports `page` and `limit`)
- `GET    /api/riders/:id`  fetch one
- `POST   /api/riders`      create (requires `name`, `phone`)
- `PUT    /api/riders/:id`  update
- `DELETE /api/riders/:id`  delete

## Fields
- `name`
- `phone`
- `vehicle`
- `isAvailable`

