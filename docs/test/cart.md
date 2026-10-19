# Cart - service tests

Source file: `backend/tests/cart.test.js`

Part of the **backend** side of FoodDash.

## API
- `GET    /api/carts`      list (supports `page` and `limit`)
- `GET    /api/carts/:id`  fetch one
- `POST   /api/carts`      create (requires `userId`, `items`)
- `PUT    /api/carts/:id`  update
- `DELETE /api/carts/:id`  delete

## Fields
- `userId`
- `items`
- `total`

