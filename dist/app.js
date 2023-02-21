import express from 'express';
const app = express();
const port = 3000;
app.get('/hello', (req, res) => {
  res.send('Hello world');
});
app.post('/hello', (req, res) => {
  res.json('Hello im posting');
});
app.listen(port);
