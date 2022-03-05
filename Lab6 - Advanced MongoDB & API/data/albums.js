const mongoCollections = require("../config/mongoCollections");
const bandsData = require("./bands");
const bands = mongoCollections.bands;
const { ObjectId } = require("mongodb");

async function checkParam(bandId, title, releaseDate, tracks, rating) {
  if (!bandId || !title || !releaseDate || !tracks || !rating) {
    throw "Error: All data fields must be provided";
  }

  if (
    typeof bandId !== "string" ||
    typeof title !== "string" ||
    typeof releaseDate !== "string"
  ) {
    throw "Error: bandId, title, and releaseDate must be strings";
  }

  if (
    bandId.trim().length == 0 ||
    title.trim().length == 0 ||
    releaseDate.trim().length == 0
  ) {
    throw "Error: bandId, title, and releaseDate must not be empty strings";
  }

  if (!ObjectId.isValid(bandId)) throw "Error: invalid object ID";

  const bandExists = await bandsData.get(bandId);
  if (!bandExists) {
    throw "Error: no band exists with that bandId";
  }

  if (!Array.isArray(tracks)) {
    throw "Error: tracks must be an array";
  }

  let isString = 0;
  for (let i = 0; i < tracks.length; i++) {
    if (typeof tracks[i] == "string" && tracks[i].trim().length !== 0) {
      isString++;
    }
    tracks[i] = tracks[i].trim();
  }

  if (isString < 3) {
    throw "Error: tracks must contain at least 3 elements that are valid strings";
  }

  // MM/DD/YYYY
  if (
    releaseDate[2] !== "/" ||
    releaseDate[5] !== "/" ||
    releaseDate.length !== 10
  ) {
    throw "Error: releaseDate must be a valid date string";
  }

  if (
    parseInt(releaseDate.slice(6)) < 1900 ||
    parseInt(releaseDate.substring(6)) > 2023
  ) {
    throw "Error: releaseDate must be a valid date string";
  }

  if (
    parseInt(releaseDate.substring(0, 2)) === 1 ||
    parseInt(releaseDate.substring(0, 2)) === 3 ||
    parseInt(releaseDate.substring(0, 2)) === 5 ||
    parseInt(releaseDate.substring(0, 2)) === 7 ||
    parseInt(releaseDate.substring(0, 2)) === 8 ||
    parseInt(releaseDate.substring(0, 2)) === 10 ||
    parseInt(releaseDate.substring(0, 2)) === 12
  ) {
    if (
      parseInt(releaseDate.substring(0, 2)) > 31 ||
      parseInt(releaseDate.substring(0, 2)) < 1
    ) {
      throw "Error: releaseDate must be a valid date string";
    }
  }

  if (typeof rating !== "number" || rating > 5 || rating < 1) {
    throw "Error: rating must be a valid number from 1 to 5";
  }
}

async function checkParam2(bandId) {
  if (!bandId) {
    throw "Error: bandId must be provided";
  }

  if (typeof bandId !== "string") {
    throw "Error: bandId must be a string";
  }

  if (bandId.trim().length == 0) {
    throw "Error: bandId must not be an empty string";
  }

  if (!ObjectId.isValid(bandId)) throw "Error: invalid object ID";

  const bandExists = await bandsData.get(bandId);
  if (!bandExists) {
    throw "Error: no band exists with that bandId";
  }
}

function checkParam3(albumId) {
  if (!albumId) {
    throw "Error: albumId must be provided";
  }

  if (typeof albumId !== "string") {
    throw "Error: albumId must be a string";
  }

  if (albumId.trim().length == 0) {
    throw "Error: albumId must not be an empty string";
  }

  if (!ObjectId.isValid(albumId)) throw "Error: invalid object ID";
}

async function create(bandId, title, releaseDate, tracks, rating) {
  checkParam(bandId, title, releaseDate, tracks, rating);
  const bandCollection = await bands();

  let newAlbum = {
    _id: ObjectId(),
    title: title,
    releaseDate: releaseDate,
    tracks: tracks,
    rating: rating,
  };

  const updatedInfo = bandCollection.updateOne(
    { _id: ObjectId(bandId) },
    { $addToSet: { albums: newAlbum } }
  );

  if (updatedInfo.modifiedCount === 0) {
    throw "could not add album successfully";
  } else {
    return newAlbum;
  }
}

async function getAll(bandId) {
  checkParam2(bandId);

  const bandCollection = await bands();
  const band = await bandCollection.findOne({ _id: ObjectId(bandId) });
  if (!band) {
    throw "Error: no band with that id";
  }

  let albums = await band.albums;
  return albums;
}

async function get(albumId) {
  const bandCollection = await bands();
  const album = await bandCollection.find({
    "albums._id": ObjectId(albumId),
  });
  if (!album) {
    throw "Error: album not found";
  }

  return bandCollection.find({
    albums: { $elemMatch: { _id: ObjectId(albumId) } },
  });
}

async function remove(albumId) {
  checkParam3(albumId);
  const bandCollection = await bands();
  const album = await bandCollection.findOne({
    "albums._id": ObjectId(albumId),
  });
  if (!album) {
    throw "Error: album not found";
  }
  const resultData = await bandCollection.updateOne(
    { _id: album._id },
    { $pull: { albums: { _id: ObjectId(albumId) } } }
  );
}

module.exports = {
  create,
  getAll,
  get,
  remove,
};
