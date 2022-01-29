const arrayUtils = require("./arrayUtils");
const stringUtils = require("./stringUtils");
const objUtils = require("./objUtils");

//console.log(arrayUtils.mean([1, 2, 3]));
console.log(stringUtils.camelCase(123));

// Mean Tests
try {
  // Should Pass
  const meanOne = mean([2, 3, 4, 5]);
  console.log("mean passed successfully");
} catch (e) {
  console.error("mean failed test case");
}

try {
  // Should Fail
  const meanTwo = mean("Hello World");
  console.error("mean did not error");
} catch (e) {
  console.log("mean failed successfully");
}

// Median Squared Tests
try {
  // Should Pass
  const medianOne = medianSquared([8, 3, 4, 5]);
  console.log("mean passed successfully");
} catch (e) {
  console.error("mean failed test case");
}

try {
  // Should Fail
  const medianTwo = medianSquared("This is string");
  console.error("mean did not error");
} catch (e) {
  console.log("mean failed successfully");
}

// Fill Tests
try {
  // Should Pass
  const fillOne = fill(6);
  console.log("fill passed successfully");
} catch (e) {
  console.error("fill failed test case");
}

try {
  // Should Fail
  const fillTwo = fill(-4);
  console.error("fill did not error");
} catch (e) {
  console.log("fill failed successfully");
}
