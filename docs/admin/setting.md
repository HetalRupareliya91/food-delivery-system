# Setting - admin manager

Source file: `admin/src/pages/SettingManager.jsx`

Part of the **admin** side of FoodDash.

## API
- `GET    /api/settings`      list (supports `page` and `limit`)
- `GET    /api/settings/:id`  fetch one
- `POST   /api/settings`      create (requires `key`, `value`)
- `PUT    /api/settings/:id`  update
- `DELETE /api/settings/:id`  delete

## Fields
- `key`
- `value`
- `scope`

