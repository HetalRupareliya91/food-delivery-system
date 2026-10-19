// Delivery validator - checks required fields before create
const REQUIRED = ['orderId', 'riderId'];

function validateCreate(req, res, next) {
  const body = req.body || {};
  const missing = REQUIRED.filter((f) => body[f] === undefined || body[f] === '');
  if (missing.length) {
    return res.status(422).json({ error: 'Validation failed', missing });
  }
  next();
}

module.exports = { REQUIRED, validateCreate };
