const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Dealer Service is running!');
});

app.listen(PORT, () => {
  console.log('Dealer Service running on port ' + PORT);
});
