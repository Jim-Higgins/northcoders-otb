function rotateArray(inputArray, rotateBy) {
  const newInputArray = [...inputArray];
  if (!inputArray) {
    return [];
  }
  else{
  //splice out the last number in the array, bt the rotateBy number.
  let removed = newInputArray.splice(-1, rotateBy);
  let inserted = removed.concat(newInputArray);
  
  console.log(inserted);
  return inserted;
  }



 
}

module.exports = { rotateArray };
