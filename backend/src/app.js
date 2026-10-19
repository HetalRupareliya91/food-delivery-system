const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: 'ok', service: 'fooddash-api' }));

// Auto-register every routes/<name>.routes.js at /api/<name>
const routesDir = path.join(__dirname, 'routes');
if (fs.existsSync(routesDir)) {
  for (const file of fs.readdirSync(routesDir)) {
    if (file.endsWith('.routes.js')) {
      app.use('/api/' + file.replace('.routes.js', ''), require(path.join(routesDir, file)));
    }
  }
}

app.use((req, res) => res.status(404).json({ error: 'Route not found' }));
app.use(errorHandler);

module.exports = app;
