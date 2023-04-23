import dumb from './dumb';
import hello from './hello';
import express from 'express';

const router = express.Router();

router.use('/dumb', dumb);
router.use('/hello', hello);

export default router;
