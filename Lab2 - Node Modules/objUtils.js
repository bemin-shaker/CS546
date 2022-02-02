//Checks that the array exists, the array is of the proper type (meaning, it's an array),
//the array is not empty, each element in the array is an object, each object in the array is not an empty object,
//and that there are at least 2 elements (objects) in the array
function checkArray(array) {
  if (!array) {
    throw "Error: Input not supplied or undefined";
  }
  if (array.length < 2) {
    throw "Error: Input must have atleast two elements (objects)";
  }
  if (!Array.isArray(array)) {
    throw "Error: Input must an array type";
  }

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "object") {
      throw "Error: Element in the array must be of object type)";
    }
    if (Object.keys(array[i]).length == 0) {
      throw "Error: Object in the array must not be empty)";
    }
  }
}

//Checks that input objects exist and are of proper object type
function checkObjects(obj1, obj2) {
  if (!obj1 || !obj2) {
    throw "Error: Inputs not supplied or undefined";
  }
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    throw "Error: Inputs must be of proper type of object)";
  }
}

//Checks that the input object exists and is of proper object type
function checkObject(obj) {
  if (!obj) {
    throw "Error: Input not supplied or undefined";
  }
  if (typeof obj !== "object") {
    throw "Error: Input must be of proper type of object)";
  }
}

//Checks that the input function exists and is of proper function type
function checkFunction(func) {
  if (!func) {
    throw "Error: Input not supplied or undefined";
  }
  if (typeof func !== "function") {
    throw "Error: Input must be of proper type of function";
  }
}

//Take in an array of objects and returns an array of arrays where an array of each key and value is an element in the array
function makeArrays(objects) {
  checkArray(objects);
  let array = objects.map((obj) => Object.entries(obj));

  return array.flat();
}

//Checks each field (at every level deep) in obj1 and obj2 for equality
//It will return true if each field is equal, and false if not
function isDeepEqual(obj1, obj2) {
  checkObjects(obj1, obj2);

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let key of Object.keys(obj1)) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

//Evaluates the given function on the values of the object and returnz a new object with the results
function computeObject(object, func) {
  checkObject(object);
  checkFunction(func);

  let newObject = {};

  for (const property in object) {
    if (typeof object[property] !== "number") {
      throw "Error: object values must be a number";
    }
    newObject[property] = func.call(this, object[property]);
  }
  return newObject;
}

module.exports = {
  makeArrays,
  isDeepEqual,
  computeObject,
};
