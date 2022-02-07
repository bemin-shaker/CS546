const axios = require("axios");

async function getPeople() {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json"
  );
  return data;
}

async function getStocks() {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/8c363d85e61863ac044097c0d199dbcc/raw/7d79752a9342ac97e4953bce23db0388a39642bf/stocks.json"
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
//if it has at least two letters after the dot
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
function sameEmail(emailDomain) {
  checkEmail(emailDomain);
}

function manipulateIp() {}

function sameBirthday(month, day) {}

module.exports = {
  getPeople,
  getPersonById,
  sameEmail,
  manipulateIp,
  sameBirthday,
};
