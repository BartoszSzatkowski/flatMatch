'use strict';

function createDescription(sequelize, DataTypes) {
  const Description = sequelize.define('Description', {
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
    Description.belongsTo(model.User, { foreignKey: 'id' });
  };

  return Description;
}

module.exports = createDescription;
