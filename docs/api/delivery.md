# Delivery - API client

Source file: `frontend/src/api/delivery.api.js`

Part of the **frontend** side of FoodDash.

## API
- `GET    /api/deliveries`      list (supports `page` and `limit`)
- `GET    /api/deliveries/:id`  fetch one
- `POST   /api/deliveries`      create (requires `orderId`, `riderId`)
- `PUT    /api/deliveries/:id`  update
- `DELETE /api/deliveries/:id`  delete

## Fields
- `orderId`
- `riderId`
- `status`
- `eta`

