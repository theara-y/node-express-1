const express = require('express');
let axios = require('axios');
var app = express();

// Enable JSON request bodies
app.use(express.json());

// Fetches the names and bios for a list of GitHub users
app.post('/', async function(req, res, next) {
  try {
    let results = await Promise.all(
      req.body.developers.map(username => axios.get(`https://api.github.com/users/${username}`))
    );

    let responseBody = results.map(r => ({ 'name': r.data.name, 'bio': r.data.bio }));

    return res.status(200).json(responseBody)
    
  } catch(err) {
    return next(err);
  }
});

// Error handler
app.use((err, req, res, next) => {
  let status = err.status || 500;
  return res.status(status).send(err.message);
});

module.exports = app;
