//I pledge my honor that I have abided by the Stevens Honor System. - Bemin Shaker
const bands = require("./data/bands");

async function main() {
  const queen = await bands.create(
    "Queen",
    ["Progressive Rock", "Art rock"],
    "http://www.queenonline.com",
    "EMI",
    ["Freddie Mercury", "Brian May", "John Deacon", "Roger Taylor"],
    1970
  );
  console.log(queen);
  const foo = await bands.create(
    "Foo Fighters",
    ["Alternative Rock", "Punk rock"],
    "http://www.foofighters.com",
    "RCA",
    [
      "Dave Grohl",
      "Taylor Hawkins",
      "Pat Smear",
      "Chris Shiflett",
      "Nate Mendel",
      "Rami Jaffee",
      "Franz Stahl",
      "William Goldsmith",
    ],
    1994
  );
  console.log(foo);
  console.log(await bands.getAll());
  const helloBand = await bands.create(
    "Hello",
    ["Alternative Rock", "Art rock"],
    "http://www.helloband.com",
    "ASE",
    ["John Smith", "Brian Rogers", "Sam Samuel", "Roger Cambridge"],
    1988
  );
  console.log(helloBand);
  const renamedQueen = await bands.rename(
    "620aec7cd02669d00c67739a",
    "Lennon Boys"
  );
  console.log(renamedQueen);
  const removeFoo = await bands.remove("620aec7cd02669d00c67739b");
  console.log(removeFoo);
  console.log(await bands.getAll());
  try {
    const createInvalid = await bands.create(
      "Queen",
      "Progressive Rock",
      "http://www.queenonline.com",
      "EMI",
      ["Freddie Mercury", "Brian May", "John Deacon", "Roger Taylor"],
      1970
    );
    console.log(createInvalid);
  } catch (e) {
    console.log(e);
  }
  try {
    const removeInvalid = await bands.remove("620ae74960313fd4e9cabb0fs");
    console.log(removeInvalid);
  } catch (e) {
    console.log(e);
  }
  try {
    const renameInvalid = await bands.rename(
      "620ae74960313fd4e9cabb0s",
      "Queen"
    );
    console.log(renameInvalid);
  } catch (e) {
    console.log(e);
  }
  try {
    const renameInvalid2 = await bands.rename("620ae74960313fd4e9cabb0f", 1344);
    console.log(renameInvalid2);
  } catch (e) {
    console.log(e);
  }
  try {
    const getInvalid = await bands.get("620ae74960313fd4e9cabb0fs");
    console.log(getInvalid);
  } catch (e) {
    console.log(e);
  }
}

main();
