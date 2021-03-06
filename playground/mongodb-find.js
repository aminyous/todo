// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server'); 
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a4cf4017baaf7ec3f93c790')
    // }).toArray().then((docs)=>{
    //     console.log('Todos: ');
    //     console.log(JSON.stringify(docs, undefined,2));
    // }, (err)=>{
    //     console.log('Unable to fetch Todos', err)
    // });

    db.collection('Users').find({name: 'Amine'}).toArray().then((docs)=>{
        console.log('Users: ');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log('Unable to fetch Todos', err)
    });
    db.collection('Users').find({name: 'Amine'}).count().then((count)=>{
        console.log('Totals: ', count);
    }, (err)=>{
        console.log('Unable to fetch Todos', err)
    });
    
    // db.close();
});