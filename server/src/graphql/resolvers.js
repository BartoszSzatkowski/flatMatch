'use strict';
const { MessageTable } = require('../model/index');

module.exports = {
  Query: {
    getUser: async function (_, { email }) {
      const user = await MessageTable.findOne({ where: { email } });
      if (user === null) throw new Error('Usernot found');
      else return user;
    },
  },
};
