import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routesHandler from './routes/handler';
import 'dotenv/config';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routesHandler);

mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log('DB Connected!');
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.SERVER_PORT;

app.listen(port, () => {
  console.log(`Node.js server is listening on ${port}.`);
});
