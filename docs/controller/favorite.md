# Favorite - controller

Source file: `backend/src/controllers/favorite.controller.js`

Part of the **backend** side of FoodDash.

## API
- `GET    /api/favorites`      list (supports `page` and `limit`)
- `GET    /api/favorites/:id`  fetch one
- `POST   /api/favorites`      create (requires `userId`, `restaurantId`)
- `PUT    /api/favorites/:id`  update
- `DELETE /api/favorites/:id`  delete

## Fields
- `userId`
- `restaurantId`

