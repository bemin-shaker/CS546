const axios = require("axios");

//Retrieves people data in JSON format with axios
async function getPeople() {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json"
  );
  return data;
}

//Checks if parameter exists, is of proper string type, and if it conains only spaces
function checkID(id) {
  if (!id || typeof id !== "string") {
    throw "Error: Parameter not provided or is not of proper string type";
  }
  if (id.trim().length == 0) {
    throw "Error: id parameter contains only empty spaces";
  }
}

//Checks if parameter exists, is of proper string type, if it conains only spaces, if it contains a dot,
//and if it has at least two letters after the last dot in the email domain
function checkEmail(emailDomain) {
  if (!emailDomain || typeof emailDomain !== "string") {
    throw "Error: Parameter not provided or is not of proper string type";
  }
  if (emailDomain.trim().length == 0) {
    throw "Error: Email domain parameter contains only empty spaces";
  }
  if (!emailDomain.includes(".")) {
    throw "Error: Email domain parameter must contain a dot";
  }
  let count = 0;
  for (let i = emailDomain.lastIndexOf(".") + 1; i < emailDomain.length; i++) {
    count++;
  }
  if (count < 2) {
    throw "Error: Parameter must contain at least 2 letters after the last dot in the email domain";
  }
}

//Checks that the month and day parameters exist and of proper number type
//If string is passed, function will attempt to parse the input parameters into valid numbers, otherwise function will throw
//Will also check that month paramter is between 1-12 and that the corresponding day is valid for the given month
function checkDate(month, day) {
  if (!month || !day) {
    throw "Error: Input parameters not provided.";
  }

  if (typeof month == "string" || typeof day == "string") {
    let intMonth = parseInt(month);
    let intDay = parseInt(day);
    if (typeof intMonth !== "number" || typeof intDay !== "number") {
      throw "Error: Input parameters are not of proper number type OR cannot be parsed into valid number";
    }
  } else {
    if (typeof month !== "number" || typeof day !== "number") {
      throw "Error: Input parameters are not of proper number type OR cannot be parsed into valid number";
    }
  }

  if (month < 1 || month > 12) {
    throw "Error: month parameter must be within the 1-12 range";
  }

  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    if (day >= 32 || day < 1) {
      throw "Error: day parameter is invalid for the month provided";
    }
  }
  if (month == 4 || month == 6 || month == 9 || month == 11) {
    if (day >= 31 || day < 1) {
      throw "Error: day parameter is invalid for the month provided";
    }
  }
  if (month == 2) {
    if (day >= 29 || day < 1) {
      throw "Error: day parameter is invalid for the month provided";
    }
  }
}

//Returns the person for the specified id within the people.json array
async function getPersonById(id) {
  checkID(id);
  let data = await getPeople();
  var result = data.find((obj) => {
    return obj.id === id;
  });

  if (!result) {
    throw "Error: Person not found";
  }

  return result;
}

//Returns an array of people objects who have the same email address domain from people.json
async function sameEmail(emailDomain) {
  checkEmail(emailDomain);
  let data = await getPeople();

  var result = data.filter((obj) => {
    return obj.email.includes(emailDomain);
  });

  if (result.length < 2) {
    throw "Error: There aren't at least two people that have the same email domain provided";
  }

  return result;
}

//Converts all the IP addresses to numbers (removing the dots) then sorting each person's IP field from lowest to highest digit
//Returns an object that contains the person's name (first and last name) with the highest number, the person's name (first and last name) with the lowest number and the Math.floor of the average from all people
async function manipulateIp() {
  let newArray = [];
  let intArray = [];
  let data = await getPeople();

  data.map((val) => {
    newArray.push(
      parseInt(
        val.ip_address.replace(".", "").replace(".", "").replace(".", "")
      ).sort()
    );
  });

  return newArray;
}

//Returns an array of strings with all the people with birthdays the same as the given month and day parameter
async function sameBirthday(month, day) {
  checkDate(month, day);
  let data = await getPeople();
  var result = data.filter((obj) => {
    return obj.date_of_birth.includes(`${month}/${day}`);
  });
  let newArray = [];
  result.forEach((element) => {
    newArray.push(`${element.first_name} ${element.last_name}`);
  });
  return newArray;
}

module.exports = {
  getPersonById,
  sameEmail,
  manipulateIp,
  sameBirthday,
};
