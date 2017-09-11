var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

// create todos
app.post('/todos', (req, res) => {
  // console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  })

  todo.save().then((doc) => {
    console.log(doc);
    res.send(doc);
  }, (e) => {
    // console.log("Unable to save data!");
    res.status(400).send(e);
  })
});

// get all todos


app.listen(3000,() => {
  console.log(`listen on => localhost:3000`);
});