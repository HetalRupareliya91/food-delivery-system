# Refund - service tests

Source file: `backend/tests/refund.test.js`

Part of the **backend** side of FoodDash.

## API
- `GET    /api/refunds`      list (supports `page` and `limit`)
- `GET    /api/refunds/:id`  fetch one
- `POST   /api/refunds`      create (requires `orderId`, `amount`)
- `PUT    /api/refunds/:id`  update
- `DELETE /api/refunds/:id`  delete

## Fields
- `orderId`
- `amount`
- `reason`
- `status`

