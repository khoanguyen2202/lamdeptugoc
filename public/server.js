const express = require('express');
const app = express();
const port = 8080;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route for the root path
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Define a route for '/cau-chuyen'
app.get('/cau-chuyen', (req, res) => {
  res.sendFile(__dirname + '/public/cau-chuyen.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
