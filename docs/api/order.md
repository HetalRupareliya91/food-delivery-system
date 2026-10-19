# Order - API client

Source file: `frontend/src/api/order.api.js`

Part of the **frontend** side of FoodDash.

## API
- `GET    /api/orders`      list (supports `page` and `limit`)
- `GET    /api/orders/:id`  fetch one
- `POST   /api/orders`      create (requires `userId`, `restaurantId`)
- `PUT    /api/orders/:id`  update
- `DELETE /api/orders/:id`  delete

## Fields
- `userId`
- `restaurantId`
- `items`
- `status`
- `total`

