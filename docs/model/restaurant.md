# Restaurant - data model

Source file: `backend/src/models/restaurant.model.js`

Part of the **backend** side of FoodDash.

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

