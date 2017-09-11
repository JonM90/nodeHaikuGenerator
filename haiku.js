function rando(arr) {
  return Math.floor(Math.random() * arr.length);
}
function createHaiku(structure, syllablesArr) {
  let wordArr;
  return structure.map(nArr => {
    return nArr.map(n => {
      wordArr = syllablesArr[n];
      return wordArr[rando(wordArr)];
    }).join(' ');
  }).join('\n');
}

module.exports = {
  createHaiku: createHaiku
};
