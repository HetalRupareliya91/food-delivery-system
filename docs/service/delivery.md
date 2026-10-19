# Delivery - service layer

Source file: `backend/src/services/delivery.service.js`

Part of the **backend** side of FoodDash.

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

