var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

// add to beginning; return a new array and not modify the original
function addElementToBeginningOfArray(array, element) {
  var newArray = new Array()
  newArray = [element, ...array]
  return array
}
// add to beginning; alter the original array that's passed in
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

// add to end; return a new array and not modify the original
function addElementToEndOfArray(array, element) {
  return [...array, element]
}

// add to end; return a new array and not modify the original
function destructivelyAddElementToEndOfArray (array, element) {
  var newArray = new Array()
  return [...newArray, element]
}

function accessElementInArray(array, index) {
  return array[index]
}

// return the entire mutated array after the 1st element is removed
function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}

// return not mutated array
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

// remove last element; return the entire array mutated.
function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop()
}

// remove last element; return the entire array NOT mutated.
function removeElementFromEndOfArray(array) {
  array.slice(0, array, -1)
  return array
}
