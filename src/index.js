import express from 'express';
import generalRouter from './routes/index.js';

const PORT = 3002;

const app = express();

app.use(generalRouter);

app.listen(PORT, () =>
  console.log(`serever has been listeng on port ${PORT}...`)
);
