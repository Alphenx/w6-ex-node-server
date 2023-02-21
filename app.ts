import os from 'node:os';
import express from 'express';

const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.json();
});

app.post('/', (req, res) => {
  res.send('hello im posting');
});

app.listen(port);
