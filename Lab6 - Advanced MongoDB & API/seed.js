const albums = require("./data/albums");
const bands = require("./data/bands");
const { ObjectId } = require("mongodb");

async function main() {
  await bands.create(
    "Queen",
    ["Progressive Rock", "Art rock"],
    "http://www.queenonline.com",
    "EMI",
    ["Freddie Mercury", "Brian May", "John Deacon", "Roger Taylor"],
    1970
  );
  await bands.create(
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
}

main();
