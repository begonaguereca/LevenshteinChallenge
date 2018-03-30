const pointsCalculator = (paths, points) => {
  let bestArray = null,
  lowestPoints = null;

  paths.forEach(path => {
    let currentPoints = 0,
    current = 0;

    //add a letter,delete a letter, change a letter, and take an anagram of the existing word.
    while(current < path.length - 2) {
      let currentWord = path[current],
      compareWord = path[current+1],
      currentLen = currentWord.length,
      compareLen = compareWord.length;

      //Take Anagram of the existing word
      if(compareLen  === currentLen && compareWord !== currentWord && checkSameChars(compareWord, currentWord)) {
        current += points[3];
      //Check a Letter
      } else if (currentLen  === compareLen && currentWord !== compareWord && checkDifferenceShort(compareWord, currentWord)) {
        current += points[2];
      //Add a Letter
      } else if (currentLen === compareLen + 1 && checkDifferenceLong(compareWord, currentWord) ) {
        current += points[0];
      //Delete a letter
      } else if (currentLen + 1 === compareLen && checkDifferenceLong(compareWord, currentWord)) {
        current += points[1];
      }
      current++;
      if(lowestPoints  && lowestPoints < currentPoints) {
        break;
      }
    }
    if (!lowestPoints || currentPoints<lowestPoints) {
      bestArray = path;
      lowestPoints = currentPoints;
    }
  });
  return bestArray;
};

const edgeExist = (vertex1, vertex2, graph) => {
  let currentEdge = false;
  let index1 = graph.vertices.indexOf(vertex1);

  graph.edges[index1].forEach(edge => {
    if(edge === vertex2) {
      currentEdge = true;
    }
  });
  return currentEdge;
};

const checkSameChars = (word1, word2) => {
  if(word1.split().sort().join() === word2.split().sort().join()) {
    return true;
  } else {
    return false;
  }
};

const wordToDict = (word) => {
  let tempDict = {};

  word.split('').forEach(char => {
    if (tempDict[char]) {
      tempDict[char] += 1;
    } else {
      tempDict[char] = 1;
    }
  });
  return tempDict;
};

const checkDifferenceLong = (word1, word2) => {
  word1 = wordToDict(word1);
  word2 = wordToDict(word2);

  let longWord = setLongWord(word1, word2),
  shortWord = JSON.stringify(word1) === JSON.stringify(longWord)? word2: word1,
  difference = 0;

  for(var char in longWord) {
    let currDiff = calcDifference(longWord[char], shortWord[char]);

    if(shortWord[char]) {
      if(longWord[char] > shortWord[char] || longWord[char] < shortWord[char]) {
        difference += currDiff;
      }
    } else {
      difference += currDiff;
    }
  }
  return difference === 1 ? true : false;
};

const checkDifferenceShort = (word1, word2) => {
  word1 = word1.split(''),
  word2 = word2.split(''),
  difference = 0;

  word1.forEach((char, i) => {
    if(char !== word2[i]) {
      difference = difference+1;
    }
  });

  return difference === 1 ? true: false;
};

const setLongWord = (word1, word2) => {
  let word1Len = Object.keys(word1).length,
  word2Len = Object.keys(word2).length;

  if(word1Len > word2Len) {
    return word1;
  } else {
    return word2;
  }
};

const calcDifference = (chars1, chars2) => {
  let oneNum = chars1? chars1 : 0,
  twoNum = chars2? chars2 : 0;
  return Math.abs(oneNum - twoNum);
};



module.exports = {
    pointsCalculator: pointsCalculator,
    edgeExist: edgeExist,
    checkSameChars: checkSameChars,
    wordToDict: wordToDict,
    checkDifferenceLong: checkDifferenceLong,
    checkDifferenceShort: checkDifferenceShort,
    setLongWord: setLongWord,
    calcDifference: calcDifference
};
