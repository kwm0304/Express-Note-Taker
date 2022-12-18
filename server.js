const express = require('express');

const app = express();//Use app to link CRUD methods 



app.use(express.urlencoded({ extended: true }));// parse incoming string or array data
app.use(express.json());// parse incoming JSON data


const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

app.use('/api', apiRoutes);
app.use("/", htmlRoutes)
app.use(express.static(__dirname + 'public'));


app.listen(process.env.PORT || 3001)
  