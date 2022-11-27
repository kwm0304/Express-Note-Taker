const express = require('express')
const PORT = process.env.PORT || 3001;
//Use app to link CRUD methods 
const app = express();
//so db.json can store and retreive notes
const fs = require('fs')






app.listen(3001, () => {
    console.log(`API server now on ${PORT}`);
  });