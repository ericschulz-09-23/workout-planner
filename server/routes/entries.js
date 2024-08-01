import express from 'express';
import {
    createEntry,
    deleteEntry,
    getEntries,
    updateEntry,
    getMealsAndRoutines,
} from '../controllers/entry.js';

const router = express.Router();

router.post('/', createEntry);
router.put('/:id', updateEntry);
router.delete('/:id', deleteEntry);
router.get('/:userId', getEntries);
router.get('/fetchMealsAndRoutines/:id', getMealsAndRoutines);

export default router;