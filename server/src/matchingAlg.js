'use strict';
const db = require('./model/index');
const geoDist = require('geodist');

async function addPossibleMatches(location) {
  // get all locations from the database
  const allLocations = await getAllLocations();
  // get ids of users that we are already related to
  const alreadyRelated = await db.Match.findAll({
    where: { UserId: location.UserId },
  });
  // GET POSSIBLE IDS
  // INSERT POSSIBLE INTO MATCH TABLE
}

async function getAllLocations() {
  const queryLocations = await db.Location.findAll();
  return queryLocations.map((loc) => loc.dataValues);
}

function getPossibleIds(location, locations, alreadyRelated) {
  const filteredLocations = locations.filter((loc) => {
    if (!alreadyRelated.includes(loc.UserId)) {
      return areInRange(location, loc);
    }
    return false;
  });

  return filteredLocations.map((loc) => loc.UserId);
}

function areInRange(loc1, loc2) {
  const coords1 = JSON.parse(loc1.coords);
  const coords2 = JSON.parse(loc2.coords);
  const distance =
    geoDist(
      { lat: coords1.lat, lon: coords1.lng },
      { lat: coords2.lat, lon: coords2.lng },
      { unit: 'meters' }
    ) / 1000;
  const range = Math.min(loc1.radius, loc2.radius);
  if (distance < range && loc1.UserId !== loc2.UserId) return true;
  return false;
}

module.exports = addPossibleMatches;
