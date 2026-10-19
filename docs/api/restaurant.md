# Restaurant - API client

Source file: `frontend/src/api/restaurant.api.js`

Part of the **frontend** side of FoodDash.

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

