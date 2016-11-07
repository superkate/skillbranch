import express from 'express';
import cors from 'cors';

import { convertToNumber, calculateSum } from './func';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2a', (req, res) => {
  const input = [req.query.a, req.query.b];
  const numbers = input.map(convertToNumber);

  res.send(calculateSum(numbers[0], numbers[1]).toString());
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
