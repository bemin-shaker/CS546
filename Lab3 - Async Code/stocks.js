//Retrieves stocks data in JSON format with axios
async function getStocks() {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/8c363d85e61863ac044097c0d199dbcc/raw/7d79752a9342ac97e4953bce23db0388a39642bf/stocks.json"
  );
  return data;
}

function listShareholders(stockName) {}

function totalShares(stockName) {}

function listStocks(firstName, lastName) {}

function getStockById(id) {}

module.exports = {
  listShareholders,
  totalShares,
  listStocks,
  getStockById,
};
