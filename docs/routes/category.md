# Category - REST routes

Source file: `backend/src/routes/categories.routes.js`

Part of the **backend** side of FoodDash.

## API
- `GET    /api/categories`      list (supports `page` and `limit`)
- `GET    /api/categories/:id`  fetch one
- `POST   /api/categories`      create (requires `name`, `description`)
- `PUT    /api/categories/:id`  update
- `DELETE /api/categories/:id`  delete

## Fields
- `name`
- `description`
- `sortOrder`

