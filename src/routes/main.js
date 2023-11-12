import { Router } from 'express';
import { test, getAllAnimeGirls, getRandomAnimeGirl } from '../controllers/main.js'

const router = Router();

router.get('/', test);

router.get('/animegirl', getAllAnimeGirls);

router.get('/random', getRandomAnimeGirl);

export default router;