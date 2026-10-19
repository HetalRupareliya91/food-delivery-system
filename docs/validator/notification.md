# Notification - request validation

Source file: `backend/src/validators/notification.validator.js`

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

