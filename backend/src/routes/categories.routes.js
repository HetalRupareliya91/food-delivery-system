// Category routes - mounted automatically at /api/categories
const { Router } = require('express');
const controller = require('../controllers/category.controller');
const { validateCreate } = require('../validators/category.validator');

const router = Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateCreate, controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
