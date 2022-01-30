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
}

function makeArrays(objects) {
  checkArray(objects);
}

function isDeepEqual(obj1, obj2) {}

function computeObject(object, func) {}

module.exports = {
  makeArrays,
  replaceChar,
  mashUp,
};
