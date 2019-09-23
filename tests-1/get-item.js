function getItem(arr, index) {
  return arr[index % arr.length];
}

module.exports = getItem;
