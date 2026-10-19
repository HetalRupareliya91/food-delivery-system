# Review - service layer

Source file: `backend/src/services/review.service.js`

Part of the **backend** side of FoodDash.

## API
- `GET    /api/reviews`      list (supports `page` and `limit`)
- `GET    /api/reviews/:id`  fetch one
- `POST   /api/reviews`      create (requires `userId`, `restaurantId`)
- `PUT    /api/reviews/:id`  update
- `DELETE /api/reviews/:id`  delete

## Fields
- `userId`
- `restaurantId`
- `rating`
- `comment`

