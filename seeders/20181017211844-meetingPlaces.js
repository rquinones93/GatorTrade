'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        // Adds ALL meetingPlaces to DB
    return queryInterface.bulkInsert('meetingPlaces', [{
      title: 'Cesar Chavez Student Center',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'J. Paul Leonard Library - Peets Coffee',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'J. Paul Leonard Library - Research Commons',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Student Services Building',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Mashouf Wellness Center',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete Table
    return queryInterface.bulkDelete('meetingPlaces', null, {});
  }
};
