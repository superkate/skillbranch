import express from 'express';
import cors from 'cors';

import { deleteExtraSpaces, validateInputName, formatName } from './func';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2b', (req, res) => {
  const inputName = req.query.fullname;
  const noExtraSpacesName = deleteExtraSpaces(inputName);

  let formatedName;
  if (validateInputName(noExtraSpacesName)) {
    formatedName = formatName(noExtraSpacesName);
  } else {
    formatedName = 'Invalid fullname';
  }

  res.send(formatedName);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
