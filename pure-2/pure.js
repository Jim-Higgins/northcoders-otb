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

function raiseSalaries(input, salaryRaise) {
  let output = [...input];

  for (let i = 0; i < input.length; i++) {

    if (input.length) {
      output[i] = { ...output[i] };
      if (output[i].salary && salaryRaise) {
        output[i].salary =
          (salaryRaise / 100) * output[i].salary + output[i].salary;
      }
    }
  }

  return output;
}

module.exports = {
  reverseItems,
  removePersonWithID,
  updateTasks,
  raiseSalaries,
};
