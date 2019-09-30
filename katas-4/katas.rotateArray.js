function rotateArray(inputArray, rotateBy) {
  const newInputArray = [...inputArray];
  if (!inputArray) {
    return [];
  } else {
    if (Math.sign(rotateBy) == -1) {
      // Negative numbers
      let removed = newInputArray.splice(1, 2);
      let inserted = removed.concat(newInputArray);

      return inserted;
    }

    //Positive numbers
    //splice out the last number in the array, bt the rotateBy number.
    let removed = newInputArray.splice(-rotateBy, rotateBy);
    let inserted = removed.concat(newInputArray);

    console.log(inserted);
    return inserted;
  }
}

module.exports = { rotateArray };
