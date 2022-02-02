const arrayUtils = require("./arrayUtils");
const stringUtils = require("./stringUtils");
const objUtils = require("./objUtils");

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
  console.log(arrayUtils.fill(6, "Happy"));
} catch (e) {
  console.log(e);
}
try {
  // Should fail
  console.log(arrayUtils.fill(-4));
} catch (e) {
  console.log(e);
}

// CountRepeating Tests
try {
  // Should Pass
  console.log(
    arrayUtils.countRepeating([7, "7", "Awesome", "awesome", "Awesome", 7])
  );
} catch (e) {
  console.log(e);
}
try {
  // Should fail
  console.log(arrayUtils.countRepeating({}));
} catch (e) {
  console.log(e);
}

//IsEqual Tests
try {
  // Should Pass
  console.log(arrayUtils.isEqual([1, 2, 3], [3, 1, 2]));
} catch (e) {
  console.log(e);
}
try {
  // Should fail
  console.log(arrayUtils.isEqual("Im a string!!"));
} catch (e) {
  console.log(e);
}

//CamelCase Tests
try {
  // Should Pass
  console.log(stringUtils.camelCase("Hello world"));
} catch (e) {
  console.log(e);
}
try {
  // Should fail
  console.log(stringUtils.camelCase(" "));
} catch (e) {
  console.log(e);
}

//ReplaceChar Tests
try {
  // Should Pass
  console.log(stringUtils.replaceChar("Happy"));
} catch (e) {
  console.log(e);
}
try {
  // Should fail
  console.log(stringUtils.replaceChar([1, 2, 3]));
} catch (e) {
  console.log(e);
}

//MashUp Tests
try {
  // Should Pass
  console.log(stringUtils.mashUp("Patrick", "Hill"));
} catch (e) {
  console.log(e);
}
try {
  // Should fail
  console.log(stringUtils.mashUp("a", "b"));
} catch (e) {
  console.log(e);
}

//MakeArrays Tests
try {
  // Should Pass
  console.log(
    objUtils.makeArrays([
      { x: 2, y: 3 },
      { a: 70, x: 4, z: 5 },
    ])
  );
} catch (e) {
  console.log(e);
}
try {
  // Should fail
  console.log(objUtils.makeArrays([{ x: 2, y: 3 }]));
} catch (e) {
  console.log(e);
}

//isDeepEqual Tests
try {
  // Should Pass
  console.log(objUtils.isDeepEqual({ a: 2, b: 3 }, { a: 2, b: 3 }));
} catch (e) {
  console.log(e);
}
try {
  // Should fail
  console.log(objUtils.isDeepEqual([2, 3, 5, 100]));
} catch (e) {
  console.log(e);
}

//ComputeObject Tests
try {
  // Should Pass
  console.log(objUtils.computeObject({ a: 3, b: 7, c: 5 }, (n) => n * 2));
} catch (e) {
  console.log(e);
}
try {
  // Should fail
  console.log(objUtils.computeObject({ a: 3, b: "7", c: 5 }, (n) => n * 2));
} catch (e) {
  console.log(e);
}
