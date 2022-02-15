const mongoCollections = require("../config/mongoCollections");
const bands = mongoCollections.bands;
const { ObjectId } = require("mongodb");

function checkParam(
  name,
  genre,
  website,
  recordLabel,
  bandMembers,
  yearFormed
) {
  if (
    !name ||
    !genre ||
    !website ||
    !recordLabel ||
    !bandMembers ||
    !yearFormed
  ) {
    throw "Error: All data fields must be provided";
  }

  if (
    typeof name !== "string" ||
    typeof website !== "string" ||
    typeof recordLabel !== "string"
  ) {
    throw "Error: name, website, and recordLabal must be strings";
  }

  if (
    name.trim().length == 0 ||
    website.trim().length == 0 ||
    recordLabel.trim().length == 0
  ) {
    throw "Error: name, website, and recordLabal must not be empty strings";
  }

  if (!Array.isArray(genre) || !Array.isArray(bandMembers)) {
    throw "Error: genre and bandMembers must be arrays";
  }

  let invalidElement1 = false;
  for (i in genre) {
    if (typeof genre[i] !== "string" || genre[i].trim().length === 0) {
      invalidElement1 = true;
      break;
    }
    genre[i] = genre[i].trim();
  }

  let invalidElement2 = false;
  for (i in bandMembers) {
    if (
      typeof bandMembers[i] !== "string" ||
      bandMembers[i].trim().length === 0
    ) {
      invalidElement2 = true;
      break;
    }
    bandMembers[i] = bandMembers[i].trim();
  }

  if (invalidElement1 || invalidElement2) {
    throw "Error: genre and/or bandMembers contain invalid elements or empty strings";
  }

  if (typeof yearFormed != "number" || yearFormed < 1900 || yearFormed > 2022) {
    throw "Error: yearFormed must be a valid number between 1900 and 2022";
  }

  if (
    !website.includes("http://www.") ||
    !website.includes(".com") ||
    website.length < 20
  ) {
    throw "Error: website must contain 'http://www.' and end in a '.com', and have at least 5 characters in-between the 'http://www.' and '.com'";
  }
}

function checkIdParam(id) {
  if (!id) throw "Error: You must provide an id to search for";
  if (typeof id !== "string") throw "Error: Id must be a string";
  if (id.trim().length === 0)
    throw "Error: Id cannot be an empty string or just spaces";
  id = id.trim();
  if (!ObjectId.isValid(id)) throw "Error: invalid object ID";
}

function checkName(name) {
  if (!name) throw "Error: You must provide a name";
  if (typeof name !== "string") throw "Error: Name must be a string";
  if (name.trim().length === 0)
    throw "Error: Name cannot be an empty string or just spaces";
}

async function get(id) {
  checkIdParam(id);
  const bandCollection = await bands();
  const band = await bandCollection.findOne({
    _id: ObjectId(id),
  });
  if (band === null) throw "Error: No band with that id";
  band["_id"] = band["_id"].toString();
  return band;
}

async function create(
  name,
  genre,
  website,
  recordLabel,
  bandMembers,
  yearFormed
) {
  checkParam(name, genre, website, recordLabel, bandMembers, yearFormed);
  name = name.trim();
  const bandCollection = await bands();

  let newBand = {
    name: name,
    genre: genre,
    website: website,
    recordLabel: recordLabel,
    bandMembers: bandMembers,
    yearFormed: yearFormed,
  };

  const insertInfo = await bandCollection.insertOne(newBand);

  if (!insertInfo.acknowledged || !insertInfo.insertedId)
    throw "Error: Could not add band";

  const newId = insertInfo.insertedId.toString();
  const band = await this.get(newId);
  return band;
}

async function getAll() {
  const bandCollection = await bands();
  const bandList = await bandCollection.find({}).toArray();
  if (!bandList) throw "Could not get all bands";
  return bandList;
}

async function remove(id) {
  checkIdParam(id);
  const bandCollection = await bands();
  const band = await this.get(id);
  let bandName = band["name"];
  const deletionInfo = await bandCollection.deleteOne({ _id: ObjectId(id) });
  if (deletionInfo.deletedCount === 0) {
    throw `Could not delete dog with id of ${id}`;
  }
  return `${bandName} has been successfully deleted!`;
}

async function rename(id, newName) {
  checkIdParam(id);
  checkName(newName);

  const bandCollection = await bands();
  const band = await this.get(id);
  if (newName === band["name"]) {
    throw "Error: newName is the same as the current value stored in the database";
  }
  const updatedBand = {
    name: newName,
  };

  const updatedInfo = await bandCollection.updateOne(
    { _id: ObjectId(id) },
    { $set: updatedBand },
    { upsert: true }
  );
  if (updatedInfo.modifiedCount === 0) {
    throw "could not update band successfully";
  }

  return await this.get(id);
}

module.exports = {
  create,
  getAll,
  get,
  remove,
  rename,
};
