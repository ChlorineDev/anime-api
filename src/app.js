import express from 'express';
import mainRouter from './routes/main.js';

const app = express();

app.use(mainRouter);

export default app;