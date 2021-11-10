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
      const newUser = await db.User.create(user);
      try {
        await newUser.save();
        return newUser;
      } catch (error) {
        console.log(e);
        return {};
      }
    },
    addLocation: async function (_, { location }) {
      const newLocation = await db.Location.create(location);
      try {
        await newLocation.save();
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
