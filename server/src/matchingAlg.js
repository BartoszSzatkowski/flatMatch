'use strict';
const db = require('./model/index');
const geoDist = require('geodist');

async function addPossibleMatches(location, { created } = { created: false }) {
  // get all locations from the database
  const allLocations = await getAllLocations();
  // delete pending matches on update of location
  if (!created) {
    await db.Match.destroy({ where: { userA: location.UserId, status: 0 } });
    await db.Match.destroy({ where: { userB: location.UserId, status: 0 } });
  }
  // get ids of users that we are already related to
  const alreadyRelated = await getAlreadyRelated(location.UserId);
  // get list of id that are possible to match
  const possibleIds = getPossibleIds(location, allLocations, alreadyRelated);
  // insert found matches in match table
  insertMatches(location.UserId, possibleIds);
}

async function getAllLocations() {
  const queryLocations = await db.Location.findAll();
  return queryLocations.map((loc) => loc.dataValues);
}

async function getAlreadyRelated(userA) {
  const queryRelated = await db.Match.findAll({
    where: { userA },
  });
  return queryRelated.map((rel) => rel.userB);
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

async function insertMatches(thisId, possibleIds) {
  for (const matchId of possibleIds) {
    const matchA = await db.Match.create({
      userA: matchId,
      userB: thisId,
      status: 0,
    });
    const matchB = await db.Match.create({
      userA: thisId,
      userB: matchId,
      status: 0,
    });
    await matchA.save();
    await matchB.save();
  }
}

module.exports = addPossibleMatches;
