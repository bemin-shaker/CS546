//Checks if a given array exists, if it is of proper type of array, and if it is not empty
//If any of these conditions are not true, the function will throw an error
function checkArray(array) {
  if (!array) {
    throw "Error: Input not supplied or undefined";
  }
  if (array.length == 0) {
    throw "Error: Input must not be an empty array";
  }
  if (!Array.isArray(array)) {
    throw "Error: Input must an array type";
  }
}

//Checks if the given array element value is a number
function checkArrayElement(value) {
  if (typeof value !== "number") {
    throw "Error: Each array element must be a number";
  }
}

//Returns the mean value of the elements of an array
const mean = (array) => {
  let sum = 0;
  checkArray(array);
  array.forEach((value) => {
    checkArrayElement(value);
    sum += value;
  });
  return sum / array.length;
};

//Returns the median value of the elements of an array squared
const medianSquared = (array) => {
  checkArray(array);
};

//Scans the array from one end to the other to find the largest element
function maxElement(array) {
  checkArray(array);
  checkArrayElement(array[0]);
  let tempMax = array[0];
  let maxIndex = 0;

  for (let i = 1; i < array.length; i++) {
    checkArrayElement(array[i]);
    if (array[i] > tempMax) {
      tempMax = array[i];
      maxIndex = i;
    }
  }

  let obj = {};
  obj[tempMax] = maxIndex;

  return obj;
}

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
