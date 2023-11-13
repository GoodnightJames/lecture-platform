const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
  res.send('Backend is up and running!');
});

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// Placeholder for audio upload
app.post('/upload-audio', (req, res) => {
    res.send('Audio upload endpoint');
  });
  
  // Placeholder for slide image upload
  app.post('/upload-slide', (req, res) => {
    res.send('Slide upload endpoint');
  });
  