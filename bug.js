const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.send('Hello from Express!');
  }).catch(err => {
    // Error handling that doesn't use next(err)
    console.error('An error occurred:', err);
    res.status(500).send('Something went wrong!');
  });
});

async function doSomethingAsync() {
  // Simulate an error (e.g., network request failure)
  throw new Error('Network request failed');
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});