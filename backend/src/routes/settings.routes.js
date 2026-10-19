// Setting routes - mounted automatically at /api/settings
const { Router } = require('express');
const controller = require('../controllers/setting.controller');
const { validateCreate } = require('../validators/setting.validator');

const router = Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateCreate, controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
