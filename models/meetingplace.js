'use strict';

module.exports = (sequelize, DataTypes) => {
  const MeetingPlace = sequelize.define('meetingPlaces', {
    title: DataTypes.STRING
  }, {});

  MeetingPlace.associate = function(models) {};
  return MeetingPlace;
};