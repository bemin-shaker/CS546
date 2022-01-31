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

//Check that the arrays exist and that each array is of proper type
function checkArray2(array1, array2) {
  if (!array1 || !array2) {
    throw "Error: One or both inputs not supplied or undefined";
  }
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    throw "Error: Inputs must an array type";
  }
}

//Check that the arrays exist and that each array is of proper type
function checkArray3(array) {
  if (!array) {
    throw "Error: Input string not supplied or undefined";
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

//Checks if the given parameter value exists, is a number type, and is a postive number
function checkParam(end) {
  if (!end) {
    throw "Error: End param not supplied or undefined";
  }
  if (typeof end !== "number") {
    throw "Error: Param must of proper type (a number)";
  }
  if (end <= 0) {
    throw "Error: Param must be a positive number greater than 0";
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
  array.forEach((value) => {
    checkArrayElement(value);
  });
  let size = array.length;

  array.sort();

  let oddMedian = array[Math.floor(size / 2)];
  let evenMedian =
    (array[Math.floor(size / 2) - 1] + array[Math.floor(size / 2)]) / 2;

  if (size % 2 != 0) return oddMedian ** 2;
  return evenMedian ** 2;
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
//If the value argument is provided, each element in the array will be set to that value
function fill(end, value) {
  checkParam(end);
  let array = [];
  for (let i = 0; i < end; i++) {
    if (value) {
      array[i] = value;
    } else {
      array[i] = i;
    }
  }
  return array;
}

//Return an object with the count of each element that is repeating in the array
const countRepeating = (array) => {
  checkArray3(array);
  let counter = {};
  let repeatingOnly = {};
  for (let i = 0; i < array.length; i++) {
    if (counter[array[i]]) {
      counter[array[i]] += 1;
    } else {
      counter[[array[i]]] = 1;
    }
  }
  //removes elements that only appear once in the array
  for (let val in counter) {
    if (counter[val] >= 2) {
      repeatingOnly[val] = counter[val];
    }
  }

  return repeatingOnly;
};

//Checks if two given arrays are equal in terms of size, then check elements to determine if they're equal
const isEqual = (arrayOne, arrayTwo) => {
  checkArray2(arrayOne, arrayTwo);

  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  arrayOne.sort();
  arrayTwo.sort();

  for (let i = 0; i < arrayOne.length; i++) {
    arrayOne[i].sort();
    arrayTwo[i].sort();
  }

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    } else {
      return true;
    }
  }
};

module.exports = {
  mean,
  medianSquared,
  maxElement,
  fill,
  countRepeating,
  isEqual,
};
