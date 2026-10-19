# Coupon - API client

Source file: `frontend/src/api/coupon.api.js`

Part of the **frontend** side of FoodDash.

## API
- `GET    /api/coupons`      list (supports `page` and `limit`)
- `GET    /api/coupons/:id`  fetch one
- `POST   /api/coupons`      create (requires `code`, `discount`)
- `PUT    /api/coupons/:id`  update
- `DELETE /api/coupons/:id`  delete

## Fields
- `code`
- `discount`
- `minOrder`
- `expiresAt`

