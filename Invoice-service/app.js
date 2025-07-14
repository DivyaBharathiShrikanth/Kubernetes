const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Invoice Service is running!');
});

app.listen(PORT, () => {
  console.log('Invoice Service running on port ' + PORT);
});
