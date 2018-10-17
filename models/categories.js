'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('categories', {
    title: DataTypes.STRING
  }, {});
  
  Categories.associate = function(models) {};
  return Categories;
};