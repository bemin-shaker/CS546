// I pledge my honor that I have abided by the Stevens Honor System.
const people = require("./people");
async function main() {
  //   try {
  //     const peopleData = await people.getPeople();
  //     console.log(peopleData);
  //   } catch (e) {
  //     console.log(e);
  //   }

  // console.log(
  //   await people.getPersonById("1380f2af-e0d8-4231-a9e7-f09650afc0bb")
  // );
  console.log(await people.sameEmail("harvard.edu"));
}

main();
