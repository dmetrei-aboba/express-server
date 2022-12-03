import express from 'express';

const usersRouter = express.Router();

usersRouter.post('/signUp', (req, res, next) => {
  //create user
  console.log('account is created');
  next();
});

usersRouter.get('/signIn', (req, res, next) => {
  //signIn
  console.log('ok!');
  next();
});

export default usersRouter;
