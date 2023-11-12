import { Router } from 'express';
import { test, getAllAnimeGirls } from '../controllers/main.js'

const router = Router();

router.get('/', test);

router.get('/animegirl', getAllAnimeGirls);

export default router;