const arrayUtils = require("./arrayUtils");
//console.log(arrayUtils.mean([1, 2, 3]));
console.log(arrayUtils.maxElement([5, 6, 7]));

// Mean Tests
try {
  // Should Pass
  const meanOne = mean([2, 3, 4]);
  console.log("mean passed successfully");
} catch (e) {
  console.error("mean failed test case");
}

try {
  // Should Fail
  const meanTwo = mean("Hello");
  console.error("mean did not error");
} catch (e) {
  console.log("mean failed successfully");
}
