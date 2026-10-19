# Ticket - service layer

Source file: `backend/src/services/ticket.service.js`

Part of the **backend** side of FoodDash.

## API
- `GET    /api/tickets`      list (supports `page` and `limit`)
- `GET    /api/tickets/:id`  fetch one
- `POST   /api/tickets`      create (requires `userId`, `subject`)
- `PUT    /api/tickets/:id`  update
- `DELETE /api/tickets/:id`  delete

## Fields
- `userId`
- `subject`
- `message`
- `status`

