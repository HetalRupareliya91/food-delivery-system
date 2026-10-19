# Coupon - data model

Source file: `backend/src/models/coupon.model.js`

Part of the **backend** side of FoodDash.

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

