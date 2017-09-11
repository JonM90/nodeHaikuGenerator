const fs = require('fs');
const cmuDict = fs.readFileSync('./cmudict.txt', 'utf-8');
const haiku = require('./haiku');

function syllables(str) {
  if (str) {
    let count = 0, charSplit;
    charSplit = str.split('');
    charSplit.forEach(char => {
      if (char.match(/\d/)) {count++}
    });
    return count;
  }
}

function formatData(data){
  let lines = data.split('\n'), lineSplit, syllCount, syllArr = [];
  lines.forEach(function(line){
    lineSplit = line.split('  ');
    syllCount = syllables(lineSplit[1]);
    syllArr[syllCount] = syllArr[syllCount] || [];
    syllArr[syllCount].push(lineSplit[0]);
  });
  return syllArr;
}

const sylls = formatData(cmuDict);

console.log(haiku.createHaiku([[5], [7], [1, 2, 2]], sylls));

//First poem generated...
// MILITARISTIC
// INSTITUTIONALIZES
// SPONTANEITY
