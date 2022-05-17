import express from 'express';
import tasksController from '../controllers/tasksController';

const router = express.Router();

router.get('/tasks', tasksController);
router.post('/tasks', tasksController);
router.put('/tasks/:id', tasksController);
router.delete('/tasks/:id', tasksController);
