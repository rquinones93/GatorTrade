'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Add images for the 3 seeded items
    return queryInterface.bulkInsert('images', [{
      itemId: 1, // Purple Shoes
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539125823/samples/ecommerce/shoes.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      itemId: 2, // Leather Bag
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539125830/samples/ecommerce/leather-bag-gray.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, { 
      itemId: 3, // Text Books $5ea
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539811936/samples/ecommerce/books.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      itemId: 4, // Intro to Java Textbook
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539811936/samples/ecommerce/books.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      itemId: 5, // iPhone 6S
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539816302/iphone6s.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      itemId: 6, // Macbook Air
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539816416/macbookair.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      itemId: 7, // Gym Party
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539816512/mashouf.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      itemId: 8, // Career Fair
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539816585/career.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      itemId: 9, // Coffee Pot 1
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539816673/coffeepot1.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      itemId: 10, // Coffee Pot 2
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539816732/coffeepot2.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      itemId: 11, // Econ Tutor
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539125821/samples/people/smiling-man.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      itemId: 12, // Carpool
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539125824/samples/bike.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('images', null, {});
  }
};
