# Payment - API client

Source file: `frontend/src/api/payment.api.js`

Part of the **frontend** side of FoodDash.

## API
- `GET    /api/payments`      list (supports `page` and `limit`)
- `GET    /api/payments/:id`  fetch one
- `POST   /api/payments`      create (requires `orderId`, `amount`)
- `PUT    /api/payments/:id`  update
- `DELETE /api/payments/:id`  delete

## Fields
- `orderId`
- `amount`
- `method`
- `status`

