'use strict';

function createLocation(sequelize, DataTypes) {
  const Location = sequelize.define('Location', {
    UserId: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    coords: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    radius: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Location.associate = (model) => {
    Location.belongsTo(model.User);
  };

  return Location;
}

module.exports = createLocation;
