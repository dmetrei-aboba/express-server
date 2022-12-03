import express from 'express';

const tasksRouter = express.Router();

tasksRouter.post('/task', (req, res, next) => {
  //create task
  console.log('task created');
  res.sendStatus(200);
});

tasksRouter.get('/tasks', (req, res, next) => {
  //get tasks
  console.log('your tasks is ...');
  res.sendStatus(200);
});

export default tasksRouter;
