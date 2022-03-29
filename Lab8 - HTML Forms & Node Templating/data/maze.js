const axios = require("axios");

function checkString(param) {
  if (!param || typeof param !== "string") {
    throw "Error: Parameter not provided or is not of proper string type";
  }
  if (param.length == 0 || param.trim().length == 0) {
    throw "Error: Length of parameter string is 0 or string contains only empty spaces";
  }
}

async function search(searchTerm) {
  checkString(searchTerm);
  const url = "http://api.tvmaze.com/search/shows?q=";
  const fullUrl = url + searchTerm;
  const { data } = await axios.get(fullUrl);
  return data.slice(0, 5);
}

async function find(id) {
  checkString(id);
  const url = "http://api.tvmaze.com/shows/";
  const fullUrl = url + id;
  const { data } = await axios.get(fullUrl);

  if (data.length == 0) {
    throw "Error: No results matching id found";
  }

  return data;
}

module.exports = {
  search,
  find,
};
