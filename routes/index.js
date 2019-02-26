import express from 'express';
const router = express.Router();
import subject from './subject';

router.use('/subjects', subject);

export default router;