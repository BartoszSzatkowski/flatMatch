'use strict';
const Sequelize = require('sequelize');
const createUser = require('./user');

const config = {
  host: 'localhost',
  dialect: 'postgres',
};

const sequelize = new Sequelize('flatmatch', 'postgres', 'password', config);

const UserTable = createUser(sequelize, Sequelize.DataTypes);

module.exports = { sequelize, UserTable };
