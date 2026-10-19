# Notification - REST routes

Source file: `backend/src/routes/notifications.routes.js`

Part of the **backend** side of FoodDash.

## API
- `GET    /api/notifications`      list (supports `page` and `limit`)
- `GET    /api/notifications/:id`  fetch one
- `POST   /api/notifications`      create (requires `userId`, `title`)
- `PUT    /api/notifications/:id`  update
- `DELETE /api/notifications/:id`  delete

## Fields
- `userId`
- `title`
- `message`
- `read`

