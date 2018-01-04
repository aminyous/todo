// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server'); 
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });
    
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5a4bcb1b4eb8942bb4add903')
    }).then((result)=>{
        console.log(JSON.stringify(result, undefined,2));
    });
    
    // db.close();
});