const axios = require("axios");
const people = require("./people");

//Retrieves stocks data in JSON format with axios
async function getStocks() {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/8c363d85e61863ac044097c0d199dbcc/raw/7d79752a9342ac97e4953bce23db0388a39642bf/stocks.json"
  );
  return data;
}

//Checks if parameter exists, is of proper string type, and whether it conains only spaces
function checkParam(param) {
  if (!param || typeof param !== "string") {
    throw "Error: Parameter not provided or is not of proper string type";
  }
  if (param.trim().length == 0) {
    throw "Error: Parameter contains only empty spaces";
  }
}

//Checks if parameters exist, are of proper string type, and whether they only conain spaces
function checkParam2(first, last) {
  if (
    (!first && !last) ||
    (typeof first !== "string" && typeof last !== "string")
  ) {
    throw "Error: Parameters not provided or are not of proper string type";
  }
  if (first.trim().length == 0 || last.trim().length == 0) {
    throw "Error: Parameters contain only empty spaces";
  }
}

//Returns an object for the stockName provided and looks up that userid  in  people.json and returns that user's first name and last name in the return object
async function listShareholders(stockName) {
  checkParam(stockName);
  let data = await getStocks();
  var result = data.find((obj) => {
    return obj.stock_name === stockName;
  });

  if (!result) {
    throw "Error: stock name cannot be found in stocks.json";
  }

  let newArray = [];

  let shareholders = result.shareholders;

  for (const share of shareholders) {
    const content = await people.getPersonById(share.userId);
    newArray.push({
      first_name: content.first_name,
      last_name: content.last_name,
      shares: share.number_of_shares,
    });
  }
  return {
    id: result.id,
    stock_name: result.stock_name,
    shareholders: newArray,
  };
}

//Calculate how many shareholders a given company has and how many total shares people own of that stock
async function totalShares(stockName) {
  checkParam(stockName);
  let data = await getStocks();
  var result = data.find((obj) => {
    return obj.stock_name === stockName;
  });
  if (!result) {
    throw "Error: stock name cannot be found in stocks.json";
  }

  let phrase = "";
  let numberOfShareholders = result.shareholders.length;
  let shareholders = result.shareholders;

  if (numberOfShareholders == 0) {
    phrase = "currently has no shareholders.";
  }

  let shareSum = 0;
  for (const share of shareholders) {
    shareSum += share.number_of_shares;
  }

  if (numberOfShareholders == 1) {
    phrase = `has 1 shareholder that owns a total of ${shareSum} shares.`;
  }

  if (numberOfShareholders >= 2) {
    phrase = `has ${numberOfShareholders} shareholders that own a total of ${shareSum} shares.`;
  }
  return `${stockName} ${phrase}`;
}
//Return an array of objects with the stock name and the number of shares that the given person owns in each company
async function listStocks(firstName, lastName) {
  checkParam2(firstName, lastName);
  let data = await people.getPeople();
  var result = data.find((obj) => {
    return obj.first_name === firstName && obj.last_name == lastName;
  });

  if (!result) {
    throw "Error: the given person was not found in people.json";
  }

  let userID = result.id;
  let arr = [];

  let stockData = await getStocks();

  for (let i = 0; i < stockData.length; i++) {
    let res = stockData[i].shareholders.filter((obj) => obj.userId === userID);

    if (res.length !== 0) {
      arr.push({
        stock_name: stockData[i].stock_name,
        number_of_shares: res[0].number_of_shares,
      });
    }
  }

  if (arr.length === 0) {
    throw "Error: person does not own shares in at least one company";
  }
  return arr;
}

//Return the Stock for the specified id within the stocks.json array
async function getStockById(id) {
  checkParam(id);
  let data = await getStocks();
  var result = data.find((obj) => {
    return obj.id === id;
  });
  if (!result) {
    throw "Error: stock cannot be found in stocks.json";
  }
  return result;
}

module.exports = {
  listShareholders,
  totalShares,
  listStocks,
  getStockById,
};
