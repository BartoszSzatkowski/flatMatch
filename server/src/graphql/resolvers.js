'use strict';
const db = require('../model/index');

module.exports = {
  Query: {
    getUser: async function (_, { email }) {
      const user = await db.User.findOne({ where: { email } });
      if (user === null) throw new Error('User not found');
      else return user;
    },
  },
  Mutation: {
    createUser: async function (_, { user }) {
      const created = await db.User.create(user);
      await created.save();
      return created;
    },
  },
};
