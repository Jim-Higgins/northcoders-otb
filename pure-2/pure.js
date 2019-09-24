function reverseItems(input) {
  const newInput = [];

  for (let i = 0; i < input.length; i++) {
    const element = input[input.length - 1 - i];
    newInput[i] = element;
  }
  return newInput;
}

function removePersonWithID(input) {
  return [];
}

module.exports = { reverseItems, removePersonWithID };
