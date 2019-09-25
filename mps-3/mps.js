function addFirstAndLastNames(input) {
  const result = [];
  if (!input[0]) return [];

  for (let index = 0; index < input.length; index++) {
    if (input[index].name) {
      let [firstName, lastName] = input[index].name.split(' ');
      result.push({ ...input[index], firstName, lastName });
    } else {
      result.push({ ...input[index] });
    }
  }

  return result;
}

function addOfficeCounts (input) {
  if(!input[0]) return [];
  
  const result = [];
  for (let index = 0; index < input.length; index++) {
    if(input[index].office) {
      const officeCount = input[index].office.length;
      result.push({...input[index], officeCount})
    } else {
      result.push({...input[index]})
    }
  }
  return result;
}
module.exports = { addFirstAndLastNames, addOfficeCounts };
