function reverseItems(input) {
  const newInput = [];

  for (let i = 0; i < input.length; i++) {
    const element = input[input.length - 1 - i];
    newInput[i] = element;
  }
  return newInput;
}

function removePersonWithID(inputArray, inputId = 0) {

    return inputArray.filter(person => person.id != inputId)
}

module.exports = { reverseItems, removePersonWithID };
