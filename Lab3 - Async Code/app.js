// I pledge my honor that I have abided by the Stevens Honor System.
const people = require("./people");
async function main() {
  //   try {
  //     const peopleData = await people.getPeople();
  //     console.log(peopleData);
  //   } catch (e) {
  //     console.log(e);
  //   }

  //console.log(await people.getPersonById(1));
  console.log(people.sameEmail("hel.lo"));
}

main();
