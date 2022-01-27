//Checks if a given array exists, if it is of proper type of array, and if it is not empty
//If any of these conditions are not true, the function will throw an error
function checkArray(array) {
  if (!array || array.length == 0 || !Array.isArray(array)) {
    throw "Error: Input must be a non-empty array type";
  }
}

//Checks if the given array element value is a number
function checkParameterValue(value) {
  if (typeof value !== "number") {
    throw "Error: Each array element must be a number";
  }
}

//Returns the mean value of the elements of an array
const mean = (array) => {
  let sum = 0;
  checkArray(array);
  array.forEach((value) => {
    checkParameterValue(value);
    sum += value;
  });
  return sum / array.length;
};

//Returns the median value of the elements of an array squared
const medianSquared = (array) => {};

//Scans the array from one end to the other to find the largest element
function maxElement(array) {}

//Creates a new numbered array starting at 0 increasing by one up to, but not including the end argument
function fill(end, value) {}

//Return an object with the count of each element that is repeating in the array
const countRepeating = (array) => {};

//Checks if two given arrays are equal in terms of size
const isEqual = (arrayOne, arrayTwo) => {};

module.exports = {
  mean,
  medianSquared,
  maxElement,
  fill,
  countRepeating,
  isEqual,
};
