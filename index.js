function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  });
}

function iterate(callback) {
  var array = [2,3]
  array.forEach(callback);

}

function doToArray(array, callback) {
  array.forEach(callback);
}
