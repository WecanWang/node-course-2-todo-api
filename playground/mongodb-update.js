// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //   _id:new ObjectID('5825bafeaa12dd0d395eccd2')
    // },{
    //   $set:{
    //     completed:true
    //   }
    // },{
    //   returnOriginal:false
    // }).then((result)=>{
    //   console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
      _id:new ObjectID('5825b19836a19b060382c5c9')
    },{
       $inc: {age: 1}
    },{
      returnOriginal:false
    }).then((result)=>{
      console.log(result);
    })
    // db.close();
});
