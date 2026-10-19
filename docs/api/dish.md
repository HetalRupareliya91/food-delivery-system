# Dish - API client

Source file: `frontend/src/api/dish.api.js`

Part of the **frontend** side of FoodDash.

## API
- `GET    /api/dishes`      list (supports `page` and `limit`)
- `GET    /api/dishes/:id`  fetch one
- `POST   /api/dishes`      create (requires `name`, `price`)
- `PUT    /api/dishes/:id`  update
- `DELETE /api/dishes/:id`  delete

## Fields
- `name`
- `price`
- `restaurantId`
- `isVeg`

