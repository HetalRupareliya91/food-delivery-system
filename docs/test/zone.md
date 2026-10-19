# Zone - service tests

Source file: `backend/tests/zone.test.js`

Part of the **backend** side of FoodDash.

## API
- `GET    /api/zones`      list (supports `page` and `limit`)
- `GET    /api/zones/:id`  fetch one
- `POST   /api/zones`      create (requires `name`, `city`)
- `PUT    /api/zones/:id`  update
- `DELETE /api/zones/:id`  delete

## Fields
- `name`
- `city`
- `radiusKm`

