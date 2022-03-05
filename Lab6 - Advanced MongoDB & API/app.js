// const express = require("express");
// const app = express();
// const configRoutes = require("./routes");

// app.use(express.json());

// configRoutes(app);

// app.listen(3000, () => {
//   console.log("We've now got a server!");
//   console.log("Your routes will be running on http://localhost:3000");
// });

const albums = require("./data/albums");
const bands = require("./data/bands");

async function main() {
  //console.log(await albums.remove("6222ccac33b9e75dd95a3518"));
  //console.log(await albums.get("6222ccac33b9e75dd95a3518"));
  //
  //console.log(await albums.getAll("6222bb7270139fa7c2361636"));
  //
  // await albums.create(
  //   "6222bb7270139fa7c2361636",
  //   "hell8o",
  //   "02/20/2010",
  //   ["1ddsf", "2fsffvdfv", "3feferf"],
  //   4
  // );
  //
  // await bands.update(
  //   "6222bb7270139fa7c2361635",
  //   "Hello",
  //   ["Hello", "two", "three"],
  //   "http://www.googlecompany.com",
  //   "XYZ",
  //   ["JOHN", "SMITH", "JAKE"],
  //   1960
  // );
  //
  // await bands.create(
  //   "Queen",
  //   ["Progressive Rock", "Art rock"],
  //   "http://www.queenonline.com",
  //   "EMI",
  //   ["Freddie Mercury", "Brian May", "John Deacon", "Roger Taylor"],
  //   1970
  // );
  //
  // await bands.create(
  //   "Foo Fighters",
  //   ["Alternative Rock", "Punk rock"],
  //   "http://www.foofighters.com",
  //   "RCA",
  //   [
  //     "Dave Grohl",
  //     "Taylor Hawkins",
  //     "Pat Smear",
  //     "Chris Shiflett",
  //     "Nate Mendel",
  //     "Rami Jaffee",
  //     "Franz Stahl",
  //     "William Goldsmith",
  //   ],
  //   1994
  // );
}

main();
