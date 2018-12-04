'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        // Adds ALL meetingPlaces to DB
    return queryInterface.bulkInsert('meetingplaces', [{
      title: 'Cesar Chavez Student Center',
    }, {
      title: 'J. Paul Leonard Library - Peets Coffee',
    }, {
      title: 'J. Paul Leonard Library - Research Commons',
    }, {
      title: 'Student Services Building',
    }, {
      title: 'Mashouf Wellness Center',
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete Table
    return queryInterface.bulkDelete('meetingplaces', null, {});
  }
};
