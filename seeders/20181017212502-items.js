'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Add 3 Items
    return queryInterface.bulkInsert('items', [{
      sellerId: '1',
      title: 'Purple Running Shoes - Like New',
      description: 'Worn once, perfect for the gym.',
      price: 30.00,
      category: 'Clothes',
      meetingPlace: 'Cesar Chavez Student Center',
      status: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sellerId: '1',
      title: 'Leather Bag',
      description: 'Got a new one need to sell, brown leather bag.',
      price: 45.00,
      category: 'Clothes',
      meetingPlace: 'J. Paul Leonard Library - Peets Coffee',
      status: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sellerId: '1',
      title: 'Text Books - $5ea',
      description: 'Hella books, on the low.',
      price: 5.00,
      category: 'Text Books',
      meetingPlace: 'J. Paul Leonard Library - Research Commons',
      status: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    } ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
