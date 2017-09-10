// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var user = {name: 'iger', age: 25, country: 'china'};

var {name, age, country} = user;
console.log(name, age, country);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Learning nodejs',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert.', err)
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  // db.collection('Users').insertOne({
  //   name: 'iger',
  //   age: 25,
  //   location: 'hangzhou',
  //   country: 'china'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert.', err);
  //   }

  //   // console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // })

  db.close();
});