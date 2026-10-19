# Restaurant - admin manager

Source file: `admin/src/pages/RestaurantManager.jsx`

Part of the **admin** side of FoodDash.

## API
- `GET    /api/restaurants`      list (supports `page` and `limit`)
- `GET    /api/restaurants/:id`  fetch one
- `POST   /api/restaurants`      create (requires `name`, `address`)
- `PUT    /api/restaurants/:id`  update
- `DELETE /api/restaurants/:id`  delete

## Fields
- `name`
- `address`
- `cuisine`
- `isOpen`

