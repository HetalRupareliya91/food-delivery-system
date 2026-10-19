# User - customer page

Source file: `frontend/src/pages/UserPage.jsx`

Part of the **frontend** side of FoodDash.

## API
- `GET    /api/users`      list (supports `page` and `limit`)
- `GET    /api/users/:id`  fetch one
- `POST   /api/users`      create (requires `name`, `email`)
- `PUT    /api/users/:id`  update
- `DELETE /api/users/:id`  delete

## Fields
- `name`
- `email`
- `phone`
- `role`

