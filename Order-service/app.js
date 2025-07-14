const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Order service is running!');
});

app.listen(port, () => {
  console.log(`Order service listening on port ${port}`);
});
