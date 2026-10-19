# Zone - admin manager

Source file: `admin/src/pages/ZoneManager.jsx`

Part of the **admin** side of FoodDash.

## API
- `GET    /api/zones`      list (supports `page` and `limit`)
- `GET    /api/zones/:id`  fetch one
- `POST   /api/zones`      create (requires `name`, `city`)
- `PUT    /api/zones/:id`  update
- `DELETE /api/zones/:id`  delete

## Fields
- `name`
- `city`
- `radiusKm`

