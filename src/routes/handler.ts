import express, { Request, Response } from 'express';
// import { connect } from 'mongoose';
import User from '../models/userSchema';
import 'dotenv/config';

const router = express.Router();

router.get('/info', async (req: Request, res: Response) => {
  const users = await User.find({});
  // console.log(users);
  res.send(users);
});

export default router;