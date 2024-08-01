import express from 'express';
import {
    createRoutine,
    deleteRoutine,
    getRoutines,
    updateRoutine,
} from '../controllers/routine.js';

const router = express.Router();

router.post('/', createRoutine);
router.put('/:id', updateRoutine);
router.delete('/:id', deleteRoutine);
router.get('/userId', getRoutines);

export default router;