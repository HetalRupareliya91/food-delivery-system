# Banner - data model

Source file: `backend/src/models/banner.model.js`

Part of the **backend** side of FoodDash.

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

