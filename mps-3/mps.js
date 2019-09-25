function addFirstAndLastNames(input) {
  const result = [];
  if (!input[0]) return [];

  if (input[0].name) {
    let [firstName, lastName] = input[0].name.split(' ');
    result.push({ ...input[0], firstName, lastName });
  } else {
    result.push({ ...input[0] });
  }

  return result;
}
module.exports = { addFirstAndLastNames };
