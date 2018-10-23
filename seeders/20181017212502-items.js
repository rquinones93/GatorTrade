'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Add 3 Items
    return queryInterface.bulkInsert('items', [{
      sellerId: '2',
      title: 'Purple Running Shoes - Like New',
      description: 'Worn once, perfect for the gym.',
      price: 30.00,
      category: 'Apparel',
      meetingPlace: 'Cesar Chavez Student Center',
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/v1539125823/samples/ecommerce/shoes.png',
      status: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sellerId: '1',
      title: 'Leather Bag',
      description: 'Got a new one need to sell, brown leather bag.',
      price: 45.00,
      category: 'Apparel',
      meetingPlace: 'J. Paul Leonard Library - Peets Coffee',
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/v1539125830/samples/ecommerce/leather-bag-gray.jpg',
      status: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sellerId: '2',
      title: 'Text Books - $5ea',
      description: 'Hella books, on the low.',
      price: 5.00,
      category: 'Books',
      meetingPlace: 'J. Paul Leonard Library - Research Commons',
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/v1539811936/samples/ecommerce/books.jpg',
      status: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sellerId: '2',
      title: 'Intro to Java Textbook - CSC210',
      description: "I graduate next semester, and need to get rid of it",
      price: 15.00,
      category: 'Books',
      meetingPlace: 'Student Services Building',
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/v1539811936/samples/ecommerce/books.jpg',
      status: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sellerId: '1',
      title: 'iPhone 6s',
      description: "Pretty used, got a new phone. Small crack on the screen.",
      price: 70.00,
      category: 'Electronics',
      meetingPlace: 'Cesar Chavez Student Center',
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/v1539816302/iphone6s.jpg',
      status: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sellerId: '2',
      title: 'Macbook Air',
      description: "Perfect for taking notes in class",
      price: 200.00,
      category: 'Electronics',
      meetingPlace: 'Student Services Building',
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/v1539816416/macbookair.jpg',
      status: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sellerId: '1',
      title: 'Gym Opening Party - $5 at the door',
      description: "Come by! 1pm-8pm!",
      price: 5.00,
      category: 'Events',
      meetingPlace: 'Mashouf Wellness Center',
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/v1539816512/mashouf.jpg',
      status: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sellerId: '2',
      title: 'Career Fair - FREE EVENT!',
      description: "Internships and Full Time! Stop by from 11AM-3PM",
      price: 0.00,
      category: 'Events',
      meetingPlace: 'Cesar Chavez Student Center',
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/v1539816585/career.jpg',
      status: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sellerId: '2',
      title: 'Coffee Pot',
      description: "The best coffee you'll ever have",
      price: 7.50,
      category: 'Home Goods',
      meetingPlace: 'Cesar Chavez Student Center',
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539816673/coffeepot1.jpg',
      status: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sellerId: '1',
      title: 'Coffee Pot 2.0',
      description: "Makes better coffee than that other person's one",
      price: 7.49,
      category: 'Home Goods',
      meetingPlace: 'Cesar Chavez Student Center',
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/v1539816732/coffeepot2.jpg',
      status: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sellerId: '1',
      title: 'Economics Tutor - 15/hr',
      description: "Dudes. I'm like. The smartest tutor. I swear.",
      price: 15.00,
      category: 'Services',
      meetingPlace: 'J. Paul Leonard Library - Research Commons',
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/v1539125821/samples/people/smiling-man.jpg',
      status: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      sellerId: '2',
      title: 'Carpool - San Mateo to SFSU',
      description: "Looking for people to join my carpool! $10 a week!",
      price: 10.00,
      category: 'Services',
      meetingPlace: 'J. Paul Leonard Library - Peets Coffee',
      imageLink: 'https://res.cloudinary.com/hx8ztvtac/image/upload/v1539125824/samples/bike.jpg',
      status: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('items', null, {});
  }
};
