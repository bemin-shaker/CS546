// I pledge my honor that I have abided by the Stevens Honor System. - Bemin Shaker

//Calculates the sum of the squares of all numbers in the array and returns that result.
const questionOne = function questionOne(arr) {
  let total = 0;
  arr.forEach((value) => {
    total += value * value;
  });
  return total;
};

//This function calculates the Fibonacci that corresponds to the index given.
const questionTwo = function questionTwo(num) {
  if (num <= 0) {
    return 0;
  } else if (num == 1) {
    return 1;
  } else {
    return questionTwo(num - 1) + questionTwo(num - 2);
  }
};

//This function returns the number of vowels contained in the value text.
const questionThree = function questionThree(text) {
  let counter = 0;
  for (let char in text) {
    if (
      text[char] == "a" ||
      text[char] == "e" ||
      text[char] == "i" ||
      text[char] == "o" ||
      text[char] == "u"
    ) {
      counter++;
    }
  }
  return counter;
};

//This function will return the factorial of the number num provided.
const questionFour = function questionFour(num) {
  if (num == 0 || num == 1) {
    return 1;
  } else if (num < 0) {
    return NaN;
  } else {
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
};

module.exports = {
  firstName: "Bemin",
  lastName: "Shaker",
  studentId: "10445235",
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
};
