var MongoClient = require('mongodb').MongoClient;
var connectionUrl = 'mongodb://localhost:27017/myproject', 
    sampleCollection = 'chapters';
	
	// myproject is the database we want to use
	// chapters is the collection we want to use
	
var chapters = [{ 
    'Title': 'Snow Crash', 
    'Author': 'Neal Stephenson' 
},{ 
    'Title': 'Snow Crash', 
    'Author': 'Neal Stephenson' 
}];

MongoClient.connect(connectionUrl, function(err, db) {   
  console.log("Connected correctly to server");    
  // Get some collection 
  var collection = db.collection(sampleCollection);  
  collection.insert(chapters,function(error,result){    
    //here result will contain an array of records inserted 
    if(!error) { 
      console.log("Success :"+result.ops.length+" chapters inserted!"); 
    } else { 
      console.log("Some error was encountered!"); 
    }    
    db.close();   
  });   
});