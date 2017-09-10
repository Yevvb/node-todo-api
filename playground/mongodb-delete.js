// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to MongoDB server');

  // delete many
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // delete one
  // db.collection('Todos').deleteOne({text: 'Have a date'}).then((res) => {
  //   console.log(res);
  // })

  // findOneAndDelete
  db.collection('Todos').findOneAndDelete({_id: new ObjectID('59b4bd954ba85f74a059d30a')}).then((res) => {
    console.log(res);
  })
  // db.close();
});