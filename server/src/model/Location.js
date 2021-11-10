'use strict';

function createLocation(sequelize, DataTypes) {
  const Location = sequelize.define('Location', {
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
    Location.belongsTo(model.User, { foreignKey: 'id' });
  };

  return Location;
}

module.exports = createLocation;
