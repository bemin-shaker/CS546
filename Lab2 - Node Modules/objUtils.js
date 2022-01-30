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

function makeArrays(objects) {
  checkArray(objects);
  let array = objects.map((obj) => Object.entries(obj));
  return array;
}

function isDeepEqual(obj1, obj2) {}

function computeObject(object, func) {}

module.exports = {
  makeArrays,
  isDeepEqual,
  computeObject,
};
