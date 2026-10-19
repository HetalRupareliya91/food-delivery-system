// Notification routes - mounted automatically at /api/notifications
const { Router } = require('express');
const controller = require('../controllers/notification.controller');
const { validateCreate } = require('../validators/notification.validator');

const router = Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateCreate, controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
