function rotateArray(inputArray, rotateBy) {
  const newInputArray = [...inputArray];
  if (!inputArray) {
    return [];
  } else {
    if (Math.sign(rotateBy) == -1) {
      // Negative numbers
      let removed = newInputArray.splice((rotateBy+ 1), -rotateBy);
      let insertedMinus = removed.concat(newInputArray);

      console.log(insertedMinus)
      return insertedMinus;
    }

    //Positive numbers
    //splice out the last number in the array, bt the rotateBy number.
    let removed = newInputArray.splice(-rotateBy, rotateBy);
    let insertedPos = removed.concat(newInputArray);

    console.log(insertedPos);
    return insertedPos;
  }
}

module.exports = { rotateArray };
