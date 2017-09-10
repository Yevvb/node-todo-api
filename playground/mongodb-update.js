// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to MongoDB server');

  // findOneAndUpdate
  db.collection('Users').findOneAndUpdate({
    name: 'axe'
  },{
    $set: {location: 'yuhang'},
    $unset: {adress: ''},
    $inc: {age: 1}
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  db.close();
});