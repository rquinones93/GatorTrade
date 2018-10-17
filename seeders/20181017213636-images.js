'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Add images for the 3 seeded items
    return queryInterface.bulkInsert('images', [{
      itemId: 1,
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539125823/samples/ecommerce/shoes.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      itemId: 2,
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539125830/samples/ecommerce/leather-bag-gray.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      itemId: 3,
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539811936/samples/ecommerce/books.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('images', null, {});
  }
};
