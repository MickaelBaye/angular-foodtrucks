var express = require("express");
const path = require('path');
var bodyParser = require("body-parser");
var mongodb = require("mongodb");

var APPLICATION_PORT = 8080;
var MONGODB_URI = "mongodb://localhost:27017/angular-foodtrucks";
var ObjectID = mongodb.ObjectID;
var FOODTRUCKS_COLLECTION = "foodtrucks";

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Catch all other routes and return the index file
app.get('/app/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || APPLICATION_PORT, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

app.get("/api/foodtrucks", function(req, res) {
  db.collection(FOODTRUCKS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/foodtrucks", function(req, res) {
  var newFoodtruck = req.body;

  // Verification for mandatory fields
  // if (!req.body.name) {
  //   handleError(res, "Invalid user input", "Must provide a name.", 400);
  // }

  db.collection(FOODTRUCKS_COLLECTION).insertOne(newFoodtruck, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new foodtruck.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

app.get("/api/foodtrucks/:id", function(req, res) {
  db.collection(FOODTRUCKS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get foodtruck");
    } else {
      res.status(200).json(doc);
    }
  });
});

app.put("/api/foodtrucks/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(FOODTRUCKS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update foodtruck");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

app.delete("/api/foodtrucks/:id", function(req, res) {
  db.collection(FOODTRUCKS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete foodtruck");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});
