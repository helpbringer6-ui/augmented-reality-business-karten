const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(bodyParser.json());
// Serve static files from the 'public' directory
app.use(express.static('public'));  

// Route for the home page
app.get('/', (req, res) => {
  // Send the index.html file in response to root requests
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server and listen on the specified PORT
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});