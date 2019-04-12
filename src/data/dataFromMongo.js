var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
export let dataFromMongo = []

MongoClient.connect('mongodb://localhost:27017/kakleshop', function(err, db) {

    assert.equal(err, null);
    console.log("Successfully connected to MongoDB Kakle Shop.");

    var query = {"name": "kakle blue"};

    var cursor = db.collection('products').find(query);

    cursor.forEach(
        function(doc) {
            dataFromMongo = doc.name;
        },
        function(err) {
            assert.equal(err, null);
            return db.close();
        }
    );

});

 