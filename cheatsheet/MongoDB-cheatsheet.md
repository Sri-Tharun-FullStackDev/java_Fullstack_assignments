Here's a comprehensive MongoDB cheatsheet covering essential commands and operations:

### Basic Commands
```shell
# Start MongoDB server (if installed locally)
mongod

# Connect to MongoDB server
mongo

# Show all databases
show dbs

# Use a specific database
use databaseName

# Show all collections in the current database
show collections
```

### CRUD Operations

#### Create
```javascript
// Insert a single document
db.collectionName.insertOne({ key: "value", key2: "value2" });

// Insert multiple documents
db.collectionName.insertMany([
  { key: "value1", key2: "value2" },
  { key: "value3", key2: "value4" }
]);
```

#### Read
```javascript
// Find one document
db.collectionName.findOne({ key: "value" });

// Find all documents
db.collectionName.find({});

// Find with query
db.collectionName.find({ key: "value" });

// Find with projection (only show specific fields)
db.collectionName.find({ key: "value" }, { key2: 1, key3: 1 });

// Find with sorting
db.collectionName.find().sort({ key: 1 });  // Ascending
db.collectionName.find().sort({ key: -1 }); // Descending

// Find with limit
db.collectionName.find().limit(5);
```

#### Update
```javascript
// Update one document
db.collectionName.updateOne(
  { key: "value" }, // Filter
  { $set: { key2: "newValue" } } // Update
);

// Update multiple documents
db.collectionName.updateMany(
  { key: "value" }, // Filter
  { $set: { key2: "newValue" } } // Update
);

// Replace one document
db.collectionName.replaceOne(
  { key: "value" }, // Filter
  { key: "newKey", key2: "newValue" } // Replacement document
);
```

#### Delete
```javascript
// Delete one document
db.collectionName.deleteOne({ key: "value" });

// Delete multiple documents
db.collectionName.deleteMany({ key: "value" });
```

### Indexes
```javascript
// Create an index
db.collectionName.createIndex({ key: 1 });  // 1 for ascending, -1 for descending

// Create a unique index
db.collectionName.createIndex({ key: 1 }, { unique: true });

// List indexes
db.collectionName.getIndexes();

// Drop an index
db.collectionName.dropIndex({ key: 1 });
```

### Aggregation
```javascript
// Basic aggregation pipeline
db.collectionName.aggregate([
  { $match: { key: "value" } },               // Match stage
  { $group: { _id: "$key2", total: { $sum: 1 } } } // Group stage
]);

// Other stages: $project, $sort, $limit, $lookup, $unwind, etc.
```

### Common Shell Methods
```javascript
// Count documents
db.collectionName.countDocuments({ key: "value" });

// Distinct values
db.collectionName.distinct("key");

// Update with upsert (insert if document doesn't exist)
db.collectionName.updateOne(
  { key: "value" }, 
  { $set: { key2: "newValue" } },
  { upsert: true }
);

// Bulk write operations
db.collectionName.bulkWrite([
  { insertOne: { document: { key: "value1", key2: "value2" } } },
  { updateOne: { filter: { key: "value" }, update: { $set: { key2: "newValue" } }, upsert: true } },
  { deleteOne: { filter: { key: "value" } } }
]);
```

### Administration
```javascript
// Create a new user
db.createUser({
  user: "username",
  pwd: "password",
  roles: [ { role: "readWrite", db: "databaseName" } ]
});

// Drop a database
db.dropDatabase();

// Drop a collection
db.collectionName.drop();
```

### Miscellaneous
```javascript
// Show current database
db

// Show database stats
db.stats();

// Show collection stats
db.collectionName.stats();

// Rename a collection
db.collectionName.renameCollection("newCollectionName");
```

This MongoDB cheatsheet provides a quick reference to common operations and commands. For more detailed information, refer to the [MongoDB Documentation](https://docs.mongodb.com/).