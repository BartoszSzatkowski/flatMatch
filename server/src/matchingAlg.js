'use strict';
const db = require('./model/index');
const geoDist = require('geodist');

async function addPossibleMatches(location) {
  const allLocations = await db.Location.findAll();
  // GET ALL LOCATIONS
  // GET ALREADY RELATED IDS
  // GET POSSIBLE IDS
  // INSERT POSSIBLE INTO MATCH TABLE
}

function getPossibleIds(location, locations, alreadyRelated) {
  const filteredLocations = locations.filter((loc) => {
    if (!alreadyRelated.includes(loc.UserId)) {
      const coords1 = JSON.parse(location.coords);
      const coords2 = JSON.parse(loc.coords);
      const distance =
        geoDist(
          { lat: coords1.lat, lon: coords1.lng },
          { lat: coords2.lat, lon: coords2.lng },
          { unit: 'meters' }
        ) / 1000;
      const range = Math.min(location.radius, loc.radius);
      if (distance < range && loc.UserId !== location.UserId) return true;
    }
    return false;
  });

  return filteredLocations.map((loc) => loc.UserId);
}

module.exports = addPossibleMatches;
