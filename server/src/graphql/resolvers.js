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
        console.log(error);
        return {};
      }
    },
    addLocation: async function (_, { location }) {
      const newLocation = await db.Location.create(location);
      try {
        await newLocation.save();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    updateLocation: async function (_, { id, updateLocation }) {
      try {
        await db.Location.update(updateLocation, { where: { id } });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    addDescription: async function (_, { desc }) {
      const newDescription = await db.Description.create(desc);
      try {
        await newDescription.save();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    updateDescription: async function (_, { id, updateDesc }) {
      try {
        await db.Description.update(updateDesc, { where: { id } });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
