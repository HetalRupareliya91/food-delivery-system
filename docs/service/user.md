# User - service layer

Source file: `backend/src/services/user.service.js`

Part of the **backend** side of FoodDash.

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

