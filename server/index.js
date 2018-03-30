const express = require('express');
const bodyParser = require('body-parser');
const pathFinder = require('./logic/InstatiateGraph.js');

const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/path', function (req, res) {
  console.log('hereeee')
  // let answer = pathFinder.graph.bestPath('HEALTH', 'HANDS', [1,5,6,7]);
  // console.log('here',answer);
  // res.json(words);
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
