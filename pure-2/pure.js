function reverseItems(input) {
  const newInput = [];

  for (let i = 0; i < input.length; i++) {
    const element = input[input.length - 1 - i];
    newInput[i] = element;
  }
  return newInput;
}

function removePersonWithID(inputArray, inputId = 0) {
  return inputArray.filter((person) => person.id != inputId);
}

function updateTasks(input, ...newTasks) {
  let output = { ...input };
  if (input.tasks && newTasks) {
    output.tasks = [...input.tasks, ...newTasks];
  }
  return output;
}

function raiseSalaries(input) {
  let output = [...input];
  if (input.length) {
    output[0] = { ...output[0] };
  }

  return output;
}

module.exports = {
  reverseItems,
  removePersonWithID,
  updateTasks,
  raiseSalaries,
};
