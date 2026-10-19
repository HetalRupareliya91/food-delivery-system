# FoodDash - Food Delivery System

A complete food delivery platform split into three apps:

| App        | Folder      | Stack                 | Port |
|------------|-------------|-----------------------|------|
| REST API   | `backend/`  | Node.js + Express     | 4000 |
| Customer   | `frontend/` | React + Vite          | 5173 |
| Admin      | `admin/`    | React + Vite          | 5174 |

The customer app is fully responsive; every screen has its own mobile
stylesheet in `frontend/src/styles/mobile/`.

## Modules
Users, restaurants, categories, dishes, carts, orders, payments,
deliveries, riders, addresses, reviews, coupons, notifications, zones,
banners, refunds, invoices, support tickets, favorites and settings.

Every module has: model -> service -> validator -> controller -> routes
-> tests on the backend, an API client + page in the customer app, a
manager screen in the admin panel and a mobile layout.

## Run locally
```bash
cd backend  && npm install && npm run dev     # http://localhost:4000/api/health
cd frontend && npm install && npm run dev     # http://localhost:5173
cd admin    && npm install && npm run dev     # http://localhost:5174
cd backend  && npm test
```

Routes are auto-registered: any `backend/src/routes/<name>.routes.js`
is mounted at `/api/<name>`. Pages in `frontend/src/pages` and
`admin/src/pages` are auto-discovered as well.
