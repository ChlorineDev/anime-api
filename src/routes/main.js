import { Router } from 'express';
import { test } from '../controllers/main.js'

const router = Router();

router.get('/', test);

export default router;