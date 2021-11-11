'use strict';

function createDescription(sequelize, DataTypes) {
  const Description = sequelize.define('Description', {
    UserId: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    factors: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Description.associate = (model) => {
    Description.belongsTo(model.User);
  };

  return Description;
}

module.exports = createDescription;
