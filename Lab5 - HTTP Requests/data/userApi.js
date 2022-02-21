const axios = require("axios");

async function getUsers() {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json"
  );
  return data;
}

async function getWork() {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/febcdd2ca91ddc685c163158ee126b4f/raw/c9494f59261f655a24019d3b94dab4db9346da6e/work.json"
  );
  return data;
}

async function getAllUsers() {
  let data = await getUsers();
  return data;
}

async function getUserById(id) {
  if (typeof id !== "number") {
    throw "Error: User id is not a proper number";
  }
  let data = await getUsers();
  var result = data.find((obj) => {
    return obj["id"] === id;
  });
  if (!result) {
    throw "Error: Person id not found";
  }
  return result;
}

async function getAllWork() {
  let data = await getWork();
  return data;
}

async function getWorkById(id) {
  if (typeof id !== "number") {
    throw "Error: Work id is not a proper number";
  }
  let data = await getWork();
  var result = data.find((obj) => {
    return obj["id"] === id;
  });
  if (!result) {
    throw "Error: Work id not found";
  }
  return result;
}
module.exports = {
  getAllUsers,
  getUserById,
  getAllWork,
  getWorkById,
};
