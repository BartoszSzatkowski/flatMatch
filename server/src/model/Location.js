'use strict';

function createLocation(sequelize, DataTypes) {
  const Location = sequelize.define('Location', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
