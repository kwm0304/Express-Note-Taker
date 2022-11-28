const express = require('express')
const PORT = process.env.PORT || 3001;
const app = express();//Use app to link CRUD methods 
const fs = require('fs')//so db.json can store and retreive notes

app.use(express.urlencoded({ extended: true }));// parse incoming string or array data
app.use(express.json());// parse incoming JSON data
app.use(express.static('public'));

const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

app.use('/api', apiRoutes);
app.use('/', htmlRoutes)



app.listen(3001, () => {
    console.log(`API server now on ${PORT}`);
  });