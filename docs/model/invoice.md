# Invoice - data model

Source file: `backend/src/models/invoice.model.js`

Part of the **backend** side of FoodDash.

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

