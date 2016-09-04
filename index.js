function changeCompletely(index,array) {
  array[index] = "now something else"
}

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}
