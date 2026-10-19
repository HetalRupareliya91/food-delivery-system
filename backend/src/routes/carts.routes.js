// Cart routes - mounted automatically at /api/carts
const { Router } = require('express');
const controller = require('../controllers/cart.controller');
const { validateCreate } = require('../validators/cart.validator');

const router = Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateCreate, controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
