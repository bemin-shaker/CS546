//Checks if string exists, the length of the string is greater than 0, and if the string is of proper type
function checkString(string) {
  if (!string) {
    throw "Error: Input not supplied or undefined";
  }
  if (string.length <= 0) {
    throw "Error: Input must not be an empty string";
  }
  if (typeof string != "string") {
    throw "Error: Input must an string type";
  }
}

//Checks if each string exists, the length of the string is at least two characters, and if each string is of proper type
function checkString2(string1, string2) {
  if (!string1 || !string2) {
    throw "Error: Input not supplied or undefined";
  }
  if (string1.length < 2 || string2.length < 2) {
    throw "Error: Input string must be at least two characters in length";
  }
  if (typeof string1 != "string" || typeof string2 != "string") {
    throw "Error: Input must an string type";
  }
}

//Returns a camel case version of the input string
function camelCase(string) {
  checkString(string);
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] == " ") {
      newString += string[i + 1].toUpperCase();
      i++;
    } else {
      if (i == 0) {
        newString += string[i].toLowerCase();
        i++;
      }
      newString += string[i].toLowerCase();
    }
  }

  return newString;
}

//Replaces any characters in the string that are the same as the starting character with alternating * and $ characters
function replaceChar(string) {
  checkString(string);
  let newString = "";
  let count = 0;
  newString += string[0];
  for (let i = 1; i < string.length; i++) {
    if (string[i] == string[0] && count % 2 == 0) {
      newString += "*";
      count++;
    } else if (string[i] == string[0] && count % 2 !== 0) {
      newString += "$";
      count++;
    } else {
      newString += string[i];
    }
  }
  return newString;
}

//Returns the concatenation of two strings, separated by a space and swapping the first 2 characters of each string
function mashUp(string1, string2) {
  checkString2(string1, string2);

  let fistSlice1 = string1.slice(0, 2),
    secondSlice1 = string1.slice(2),
    fistSlice2 = string2.slice(0, 2),
    secondSlice2 = string2.slice(2);

  return `${fistSlice2}${secondSlice1} ${fistSlice1}${secondSlice2}`;
}

module.exports = {
  camelCase,
  replaceChar,
  mashUp,
};
