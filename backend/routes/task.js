const express = require('express');
const { taskController } = require('../controllers');
const { fieldsValidation, idValidation } = require('../middlewares');
const { tasks } = require('../schemas');

const router = express.Router();

const routeWithId = '/tasks/:id';

router.get('/tasks', taskController.readAll);
router.post('/tasks', fieldsValidation(tasks), taskController.create);
router.get(routeWithId, idValidation, taskController.readOne);
router.put(routeWithId, idValidation, taskController.update);
router.delete(routeWithId, idValidation, taskController.remove);

module.exports = router;
