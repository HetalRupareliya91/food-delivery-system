// Banner routes - mounted automatically at /api/banners
const { Router } = require('express');
const controller = require('../controllers/banner.controller');
const { validateCreate } = require('../validators/banner.validator');

const router = Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateCreate, controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
