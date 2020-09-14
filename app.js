"use strict";

const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/dislikes', (req, res) => {
  let dislikes = {
    color: "Yellow",
    game: "World's Hardest Game",
    movie: "Frozen",
    food: "Anchovies",
    pizza: "Domino's"
  };
  res.json(dislikes);
});

app.get("/hello", (req, res) => {
  let name = req.query.name;
  if (!name) {
    res.status(400).send("Missing name parameter");
  } else {
    res.type("text").send("Hello " + name + ", you are looking great!");
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);