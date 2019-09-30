function rotateArray(inputArray, rotateBy) {
  const newInputArray = [...inputArray];
  if (!inputArray) {
    return [];
  }
  else{

    
    //   if(rotateBy === 1){
    //     let removed = newInputArray.splice( -1, 1);
    //     let inserted = removed.concat(newInputArray);  
    //     return inserted
    //   }

  //splice out the last number in the array, bt the rotateBy number.
  let removed = newInputArray.splice((-rotateBy), rotateBy);
  let inserted = removed.concat(newInputArray);

  console.log(inserted);
  return inserted;
  }
}

module.exports = { rotateArray };
