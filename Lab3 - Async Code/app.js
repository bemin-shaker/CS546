// I pledge my honor that I have abided by the Stevens Honor System. - Bemin Shaker

const people = require("./people");
const stocks = require("./stocks");

async function main() {
  // try {
  //   const peopleOne = await people.getPersonById(
  //     "1380f2af-e0d8-4231-a9e7-f09650afc0bb"
  //   );
  //   console.log(peopleOne);
  // } catch (e) {
  //   console.log(e);
  // }

  // try {
  //   const peopleTwo = await people.sameEmail("harvard.edu");
  //   console.log(peopleTwo);
  // } catch (e) {
  //   console.log(e);
  // }

  try {
    const peopleFour = await people.sameBirthday(9, 25);
    console.log(peopleFour);
  } catch (e) {
    console.log(e);
  }
}

main();
