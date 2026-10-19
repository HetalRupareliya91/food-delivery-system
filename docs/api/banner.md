# Banner - API client

Source file: `frontend/src/api/banner.api.js`

Part of the **frontend** side of FoodDash.

## API
- `GET    /api/banners`      list (supports `page` and `limit`)
- `GET    /api/banners/:id`  fetch one
- `POST   /api/banners`      create (requires `title`, `imageUrl`)
- `PUT    /api/banners/:id`  update
- `DELETE /api/banners/:id`  delete

## Fields
- `title`
- `imageUrl`
- `link`
- `active`

