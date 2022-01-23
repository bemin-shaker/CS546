// I pledge my honor that I have abided by the Stevens Honor System. - Bemin Shaker

const questionOne = function questionOne(arr) {
  let total = 0;
  arr.forEach((value) => {
    total += value * value;
  });
  return total;
};

const questionTwo = function questionTwo(num) {
  if (num < 1) {
    return 0;
  } else if (num == 1) {
    return 1;
  } else {
  }
};

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

const questionFour = function questionFour(num) {
  let x = 1;

  for (const i = num; i <= 1; i--) {
    x = x * i;
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
