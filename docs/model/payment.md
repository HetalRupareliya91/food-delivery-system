# Payment - data model

Source file: `backend/src/models/payment.model.js`

Part of the **backend** side of FoodDash.

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

