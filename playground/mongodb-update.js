// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server'); 
    }
    console.log('Connected to MongoDB server');

    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a4e3b76a3e6642eac855be2')
    },
    {
        $set:{name: 'Amouna'},
        $inc:{age: 1}
    },
    {
        returnOriginal: false
    }
).then((results)=>{
    console.log(results);
});
    
    // db.close();
});