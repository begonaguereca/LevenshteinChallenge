const helper = require('./helper.js');

function Graph() {
  this.vertices = [];
  this.edges = [];
  this.numberOfEdges = 0;
}

Graph.prototype.addVertex = function(vertex) {
  this.vertices.push(vertex);
  let currIndex = this.vertices.length -1;
  this.edges[currIndex] = [];
};

Graph.prototype.addEdge = function(vertex1, vertex2) {
  let currentEdge = helper.edgeExist(vertex1, vertex2, this);
  let indexOne = this.vertices.indexOf(vertex1);
  let indexTwo = this.vertices.indexOf(vertex2);

  if(!currentEdge) {
    this.edges[indexOne].push(vertex2);
    this.edges[indexTwo].push(vertex1);
    this.numberOfEdges++;
  }
};

Graph.prototype.bestPath = function(start, end, points) {
  if(this.vertices.indexOf(start) === -1 ) {
    return 'Start word not found in dictionary';
  } else if (this.vertices.indexOf(end) === -1){
    return 'End word not found in dictionary';
  }

  let paths = [];
  let path = [];

  var recursePaths = (curr, count) => {
    if(curr === end) {
      path.push(curr);
      paths.push(path);
      path = [];
      return;
    } else if (count > this.vertices.length || curr === undefined) {
      return;
    } else {
      let indexCurr = this.vertices.indexOf(curr);
      path.push(curr);
      this.edges[indexCurr].forEach(val => {
        if(path.indexOf(val) === -1) {
          count += 1;
          recursePaths(val, path, count);
        }
      });
    }
  };
  recursePaths(start, 0);
  return helper.pointsCalculator(paths, points);
};

module.exports.Graph = Graph;
