const express = require('express');
const { taskController } = require('../controllers');

const router = express.Router();

const routeWithId = '/tasks/:id';

router.get('/tasks', taskController.readAll);
router.post('/tasks', taskController.create);
router.get(routeWithId, taskController.readOne);
router.put(routeWithId, taskController.update);
router.delete(routeWithId, taskController.remove);

module.exports = router;
