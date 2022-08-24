import express, { Request, Response } from 'express';
// import { connect } from 'mongoose';
import User from '../models/userSchema';
import 'dotenv/config';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  res.send({
    'message': 'Hello World!'
  });
});

router.get('/info', async (req: Request, res: Response) => {
  const users = await User.find({});
  // console.log(users);
  res.send({
    'res': users,
    'Access-Control-Allow-Origin': 'https://hw-platform.herokuapp.com'
  });
});

export default router;
