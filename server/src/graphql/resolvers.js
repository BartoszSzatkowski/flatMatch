'use strict';
const db = require('../model/index');
const addPossibleMatches = require('../matchingAlg');

module.exports = {
  Query: {
    getUser: async function (_, { email }) {
      const user = await db.User.findOne({ where: { email } });
      if (user === null) throw new Error('User not found');
      else return user;
    },
    getNextMatch: async function (_, { UserId }) {
      const myFirstPending = await db.Match.findOne({
        where: { userA: UserId, status: 0 },
      });
      const nextMatch = await db.Match.findOne({
        where: { userA: myFirstPending.dataValues.userB, userB: UserId },
      });
      return nextMatch.dataValues;
    },
    getConversation: async function (_, { userA, userB }) {
      const firstSide = await db.Message.findAll({
        where: { sender: userA, recipient: userB },
      });
      const secondSide = await db.Message.findAll({
        where: { sender: userB, recipient: userA },
      });
      const conv = [
        ...firstSide.map((msg) => msg.dataValues),
        ...secondSide.map((msg) => msg.dataValues),
      ];
      return conv.sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
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
        addPossibleMatches(location, { created: true });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    updateLocation: async function (_, { UserId, updateLocation }) {
      try {
        await db.Location.update(updateLocation, { where: { UserId } });
        const location = await db.Location.findOne({ where: { UserId } });
        addPossibleMatches(location);
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
    updateDescription: async function (_, { UserId, updateDesc }) {
      try {
        await db.Description.update(updateDesc, { where: { UserId } });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    updateMatch: async function (_, { thisId, otherId, status }) {
      try {
        await db.Match.update(
          { status },
          { where: { userA: thisId, userB: otherId } }
        );
        if (status === -1) {
          await db.Match.update(
            { status },
            { where: { userA: otherId, userB: thisId } }
          );
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    createMessage: async function (_, { sender, recipient, content }) {
      try {
        const newMsg = await db.Message.create({ sender, recipient, content });
        await newMsg.save();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
  Match: {
    user: async (parent) => {
      return await db.User.findOne({ where: { id: parent.userA } });
    },
    desc: async (parent) => {
      const descQuery = await db.Description.findOne({
        where: { UserId: parent.userA },
      });
      return descQuery.dataValues;
    },
  },
};
