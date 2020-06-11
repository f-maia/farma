import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  return res.json({ status: `Server running on ${process.env.APP_URL}` });
});

app.listen(process.env.APP_PORT);
