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

function replaceChar(string) {
  checkString(string);
  let newString = "";
  newString += string[0];
  for (let i = 1; i < string.length; i++) {
    if (string[i] == string[0]) {
      newString += "*";
    } else {
      newString += string[i];
    }
  }
  return newString;
}

function mashUp(string1, string2) {}

module.exports = {
  camelCase,
  replaceChar,
  mashUp,
};
