const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling if userId is not a number
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    // Missing proper error handling here, just returning 404
    return res.status(404).send('User not found');
  }
  res.json(user);
});