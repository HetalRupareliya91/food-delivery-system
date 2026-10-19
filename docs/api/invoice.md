# Invoice - API client

Source file: `frontend/src/api/invoice.api.js`

Part of the **frontend** side of FoodDash.

## API
- `GET    /api/invoices`      list (supports `page` and `limit`)
- `GET    /api/invoices/:id`  fetch one
- `POST   /api/invoices`      create (requires `orderId`, `amount`)
- `PUT    /api/invoices/:id`  update
- `DELETE /api/invoices/:id`  delete

## Fields
- `orderId`
- `amount`
- `tax`
- `issuedAt`

