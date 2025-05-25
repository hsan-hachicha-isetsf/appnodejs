const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Application DevOps annéé 2025!');
});
app.get('/contact', (req, res) => {
  res.send('page contact!');
});
app.listen(3000, () => console.log('App running on port 3000'));
