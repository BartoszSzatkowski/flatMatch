'use strict';

function createMessage(sequelize, DataTypes) {
  const Message = sequelize.define('Message', {
    sender: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recipient: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return Message;
}

module.exports = createMessage;
