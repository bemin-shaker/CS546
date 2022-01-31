const arrayUtils = require("./arrayUtils");
const stringUtils = require("./stringUtils");
const objUtils = require("./objUtils");

//console.log(stringUtils.mashUp("hello", "world"));

// Mean Tests
try {
  // Should Pass
  console.log(arrayUtils.mean([2, 3, 4, 5]));
} catch (e) {
  console.log(e);
}
try {
  // Should fail
  console.log(arrayUtils.mean("Hello World"));
} catch (e) {
  console.log(e);
}

// Median Tests
try {
  // Should Pass
  console.log(arrayUtils.medianSquared([8, 3, 4, 5]));
} catch (e) {
  console.log(e);
}
try {
  // Should fail
  console.log(arrayUtils.medianSquared("This is a string"));
} catch (e) {
  console.log(e);
}

// Max Element Tests
try {
  // Should Pass
  console.log(arrayUtils.maxElement([1, 13, 4, 500]));
} catch (e) {
  console.log(e);
}
try {
  // Should fail
  console.log(arrayUtils.maxElement("1"));
} catch (e) {
  console.log(e);
}

// Fill Tests
try {
  // Should Pass
  console.log(arrayUtils.fill(6));
} catch (e) {
  console.log(e);
}
try {
  // Should fail
  console.log(arrayUtils.fill(-4));
} catch (e) {
  console.log(e);
}
