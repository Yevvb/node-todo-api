// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = {name: 'iger', age: 25, country: 'china'};

// var {name, age, country} = user;
// console.log(name, age, country);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({_id: new ObjectID('59b13aaf81361581203ef22b')}).toArray().then((docs) => {
  //   console.log('Todos')
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // })

  db.collection('Todos').find().count().then((count) => {
    console.log('Todos count:',count);
  }, (err) => {
    console.log('Unable to count todos', err)
  })

  db.close();
});