'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Add Messages to each of the 3 posts
    return queryInterface.bulkInsert('messages', [{
      itemId: 1,
      sellerId: 1,
      message: "Hey, I'd like to buy the running shoes. My # is 555-555-5555. Thanks.",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      itemId: 2,
      sellerId: 1,
      message: "Interested in the bag. Email me at iwantthebag@email.com. Thanks.",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      itemId: 3,
      sellerId: 1,
      message: 'Do you have any art text books? Text me #111-111-1111',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('messages', null, {});
  }
};
