// Delivery routes - mounted automatically at /api/deliveries
const { Router } = require('express');
const controller = require('../controllers/delivery.controller');
const { validateCreate } = require('../validators/delivery.validator');

const router = Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateCreate, controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
