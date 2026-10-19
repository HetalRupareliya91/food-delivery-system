# Delivery - customer page

Source file: `frontend/src/pages/DeliveryPage.jsx`

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

