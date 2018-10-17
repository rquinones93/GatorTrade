'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profilePicture: DataTypes.STRING
  }, {});

  // Key Associations
  User.associate = function(models) {
    User.hasMany(models.Items, {
      foreignKey: 'sellerId',
      sourceKey: 'userId'
    });

    User.hasMany(models.Messages, {
      foreignKey: 'sellerId',
      sourceKey: 'userId'
    });

    User.hasMany(models.Admin, {
      foreignKey: 'userId',
      sourceKey: 'userId'
    });
  };
  return User;
};