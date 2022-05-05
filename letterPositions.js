const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let key = sentence[i];
    if (key != "") {
      if (!(key in results)) {
        Object.assign(results, { [key]:[]});
      }
    }
  }

  for (let i = 0; i < sentence.length; i++) {
    let key = sentence[i];

    if (key != "") {
      let value = results[key];
      value.push(i);

  return results;
};

let val = letterPositions("Lighthouse in the house");
console.log(val);