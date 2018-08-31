//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj)
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');

    }
    
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').find({_id: new ObjectID("5b887063a25158b297df8450")}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    //     client.close();
    //     return
    // }, (err) => {
    //     console.log('unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    //     client.close();
    //     return
    // }, (err) => {
    //     console.log('unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Mat'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
        client.close();
        return
    }, (err) => {
        console.log('unable to fetch todos', err);
    });

    //client.close();
});