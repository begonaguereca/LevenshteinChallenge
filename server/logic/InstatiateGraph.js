const helper = require('./helper.js');
const Graph = require('./Graph.js');
const wordBank = require('an-array-of-english-words')
const graph = new Graph.Graph();
//const wordBank = ['a', 'aaaa', 'aa', 'd', 'dd']
console.log('one',graph);
wordBank.forEach(word => {
  graph.addVertex(word);
});
console.log('two',graph);

graph.vertices.forEach(currentWord => {
  let currentLen = currentWord.length;

  graph.vertices.forEach(compareWord => {
    let compareLen = compareWord.length;
      //Checking for Anagram's
    if(compareLen  === currentLen && compareWord !== currentWord && helper.checkSameChars(compareWord, currentWord)) {
        //console.log('one')
        graph.addEdge(compareWord, currentWord);

      //Words same size, one letter difference
    } else if (currentLen  === compareLen && currentWord !== compareWord && helper.checkDifferenceShort(compareWord, currentWord)) {
        //console.log('two', compareWord, currentWord)
        graph.addEdge(compareWord, currentWord);

      //Words diff size, one letter difference
    } else if (currentLen === compareLen + 1 && helper.checkDifferenceLong(compareWord, currentWord) ) {
        //console.log('three')
        graph.addEdge(compareWord, currentWord);

      //Words diff size, one letter difference
    } else if (currentLen + 1 === compareLen && helper.checkDifferenceLong(compareWord, currentWord)) {
        //console.log('four')
        graph.addEdge(compareWord, currentWord);
    }
  });
});
console.log('three',graph)


module.exports.graph = graph;
