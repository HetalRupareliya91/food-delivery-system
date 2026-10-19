# Cart - admin manager

Source file: `admin/src/pages/CartManager.jsx`

Part of the **admin** side of FoodDash.

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

