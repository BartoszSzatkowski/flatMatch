'use strict';
const { UserTable } = require('../model/index');

module.exports = {
  Query: {
    getUser: async function (_, { email }) {
      const user = await UserTable.findOne({ where: { email } });
      if (user === null) throw new Error('User not found');
      else return user;
    },
  },
};
