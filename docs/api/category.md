# Category - API client

Source file: `frontend/src/api/category.api.js`

Part of the **frontend** side of FoodDash.

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

