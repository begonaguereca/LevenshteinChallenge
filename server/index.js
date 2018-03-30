var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/items', function (req, res) {
  const words = require('an-array-of-english-words')
  //console.log('here', words);
  res.json(words);


});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
