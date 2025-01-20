const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res, next) => {
  try {
    await doSomethingAsync();
    res.send('Hello from Express!');
  } catch (err) {
    next(err); // Pass the error to the error-handling middleware
  }
});

async function doSomethingAsync() {
  // Simulate an error (e.g., network request failure)
  throw new Error('Network request failed');
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('An error occurred:', err);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});