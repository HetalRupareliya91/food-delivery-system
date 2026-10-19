# Address - REST routes

Source file: `backend/src/routes/addresses.routes.js`

Part of the **backend** side of FoodDash.

## API
- `GET    /api/addresses`      list (supports `page` and `limit`)
- `GET    /api/addresses/:id`  fetch one
- `POST   /api/addresses`      create (requires `userId`, `line1`)
- `PUT    /api/addresses/:id`  update
- `DELETE /api/addresses/:id`  delete

## Fields
- `userId`
- `line1`
- `city`
- `pincode`

