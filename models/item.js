'use strict';

module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    sellerId: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    category: DataTypes.STRING,
    meetingPlace: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});

  Item.associate = function(models) {
    // associations can be defined here
  };
  
  return Item;
};