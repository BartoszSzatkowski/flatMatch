'use strict';
const Sequelize = require('sequelize');
const createUser = require('./user');

const config = {
  host: 'localhost',
  dialect: 'postgres',
};

const sequelize = new Sequelize('flatMatch', 'postgres', 'password', config);

const MessageTable = createUser(sequelize, Sequelize.DataTypes);

module.exports = { sequelize, MessageTable };
