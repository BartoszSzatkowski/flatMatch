'use strict';
const Sequelize = require('sequelize');

const config = {
  host: 'localhost',
  dialect: 'postgres',
};

const sequelize = new Sequelize('flatMatch', 'postgres', 'password', config);

module.exports = { sequelize };
