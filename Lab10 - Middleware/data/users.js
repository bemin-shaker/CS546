const mongoCollections = require("../config/mongoCollections");
const users = mongoCollections.users;
const bcrypt = require("bcrypt");
const saltRounds = 16;

function checkParam(user, pass) {
  if (!user || !pass) {
    throw "Error: Username and/or password not provided";
  }
  if (
    typeof user != "string" ||
    user.length < 4 ||
    user.includes(" ") ||
    !user.match(/^[0-9a-z]+$/)
  ) {
    throw "Error: invalid username provided";
  }
  if (typeof pass != "string" || pass.length < 6 || pass.includes(" ")) {
    throw "Error: invalid password provided";
  }
}

async function getUser(user) {
  const usersCollection = await users();
  const userFound = await usersCollection.findOne({
    username: user,
  });
  return userFound;
}

async function createUser(username, password) {
  checkParam(username, password);
  const hashPassword = await bcrypt.hash(password, saltRounds);
  let userFound = await getUser(username);
  if (userFound) {
    throw `Error: There is already a user with that username`;
  }
  let user = {
    username: username,
    password: hashPassword,
  };
  const usersCollection = await users();
  const insertInfo = await usersCollection.insertOne(user);
  if (insertInfo.insertedCount === 0) {
    throw "Error: Could not add user";
  } else {
    return { userInserted: true };
  }
}

async function checkUser(username, password) {
  checkParam(username, password);
  username = username.toLowerCase();
  let userFound = await getUser(username);
  if (userFound === null) {
    throw `Either the username or password is invalid`;
  }
  let compareToPassword = await bcrypt.compare(password, userFound.password);
  if (compareToPassword) {
    return { authenticated: true };
  } else {
    throw `Either the username or password is invalid`;
  }
}

module.exports = {
  createUser,
  checkUser,
};
