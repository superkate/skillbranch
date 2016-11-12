import express from 'express';
import cors from 'cors';

import getUsernameFromUrl from './func';

const app = express();
app.use(cors());

app.get('/task2c', (req, res) => {
  const input = req.query.username || '';

  const username = getUsernameFromUrl(input);

  let result;
  if (username) {
    result = '@' + username;
  } else {
    result = 'Invalid username';
  }

  res.send(result);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
