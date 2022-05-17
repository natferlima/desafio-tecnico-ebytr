const express = require('express');
const { taskController } = require('../controllers');

const router = express.Router();

router.get('/tasks', taskController.readAll);
router.post('/tasks', taskController.create);
// router.put('/tasks/:id', taskController);
// router.delete('/tasks/:id', taskController);

module.exports = router;
