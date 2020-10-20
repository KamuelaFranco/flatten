const flatten = (incomingArray, builtArray = []) => {
  incomingArray.forEach((element) => (Array.isArray(element)
    ? flatten(element, builtArray) : builtArray.push(element)));
  return builtArray;
};

module.exports = flatten;
