'use strict';

function createMatch(sequelize, DataTypes) {
  const Match = sequelize.define('Match', {
    userA: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userB: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validator: {
        isIn: [[-1, 0, 1]],
      },
    },
  });

  Match.associate = (model) => {
    Match.belongsTo(model.User);
  };

  return Match;
}

module.exports = createMatch;
