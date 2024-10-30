// Create web server that listens for requests on the root URL and responds with a list of comments in JSON format.
const express = require('express');
const app = express();
const PORT = 3000;

const comments = [
  { username: 'Tammy', comment: 'lol first comment' },
  { username: 'Jimmy', comment: 'nice one!' },
  { username: 'Sandy', comment: 'I love it!' }
];

// Respond with the json for the comments
app.get('/', (req, res) => {
  res.json(comments);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Run the server using node comments.js and visit http://localhost:3000 to see the comments. 
// The comments should be displayed as a JSON array of objects. 

// 3.2