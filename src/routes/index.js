import express from 'express';

import tasksRouter from './tasks.js';
import usersRouter from './users.js';

const generalRouter = express.Router();

generalRouter.use(tasksRouter);
generalRouter.use(usersRouter);

export default generalRouter;
