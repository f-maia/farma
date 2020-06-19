import 'dotenv/config';
import 'reflect-metadata';

import express from 'express';
import cors from 'cors';

import './database';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/test-connection', (req, res) => {
  return res.json({
    status: `Server up and running on ${process.env.APP_URL}`,
  });
});

app.use(routes);

app.listen(process.env.APP_PORT);
