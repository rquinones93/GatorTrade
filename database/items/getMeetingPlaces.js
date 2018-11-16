// Module used getting all Item Meeting Places
const db = require('../connection');

const GET_MEETING_PLACES = `SELECT title FROM meetingplaces`;

const getMeetingPlaces = () => {
  // Query the DB and return results
  return db.any(GET_MEETING_PLACES);
};

module.exports = getMeetingPlaces;
