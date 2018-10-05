const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(express.static('dist'))

let db;

MongoClient.connect('mongodb://<dbuser>:<dbpassword>@ds041167.mlab.com:41167/react-crud-db', (err, client) => {
  if (err) { 
    console.log(err) 
  } else {
    db = client.db('react-crud-db'); 
  }

  app.listen(3000, () => {
    console.log('listening on 3000');
  });
});

app.get('/', (req, res) => {
  var cursor = db.collection('suggestions').find().toArray(function(err, results) {
    console.log(results);
});
  //res.sendFile(__dirname + '/dist/index.html');
  // console.log('dirname =', __dirname);

app.post('/suggestions', (req, res) => {
  db.collection('suggestions').save(req.body, (err, result) => {
    if (err) { 
      return console.log(err);
    } else {
      console.log('saved to database');
      res.redirect('/'); 
    }
  // console.log(req.body);

  });