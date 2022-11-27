const express = require('express')
//Use app to link CRUD methods 
const app = express();
//so db.json can store and retreive notes
const fs = require('fs')






app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });