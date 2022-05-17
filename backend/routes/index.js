import express from 'express';
import taskController from '../controllers/taskController';

const router = express.Router();

router.get('/tasks', taskController.readAll);
router.post('/tasks', taskController.create);
// router.put('/tasks/:id', taskController);
// router.delete('/tasks/:id', taskController);
