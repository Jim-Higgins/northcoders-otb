function sumArgs(firstArg, secondArg) {
    
  if (secondArg == null) {
    secondArg = 1;
    sumOfArgs = firstArg * secondArg;
  } else {
    sumOfArgs = firstArg * secondArg;
  }

  return sumOfArgs;
}

module.exports = sumArgs;
