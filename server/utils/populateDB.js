'use strict';
const addPossibleMatches = require('../src/matchingAlg');
const db = require('../src/model/index');

const users = [
  { name: 'Bob', email: 'bob@bob.com', password: 'bob' },
  { name: 'Andy', email: 'andy@bob.com', password: 'andy' },
  { name: 'Alexi', email: 'alexi@bob.com', password: 'alexi' },
  { name: 'Adam', email: 'adam@bob.com', password: 'adam' },
  { name: 'Maria', email: 'maria@bob.com', password: 'maria' },
];

const descriptions = [
  {
    UserId: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel nisl a lectus laoreet eleifend vitae sed purus. Aenean commodo ante venenatis metus efficitur, in hendrerit eros ornare.',
    factors: '["Programmer", "Like quiet", "100% Geek"]',
  },
  {
    UserId: 2,
    text: 'Proin erat orci, lacinia hendrerit dapibus a, faucibus ac purus. Ut bibendum pellentesque ligula, vel volutpat nunc.',
    factors: '["Working night shift", "Smoker", "Like to party"]',
  },
  {
    UserId: 3,
    text: 'Morbi viverra lacus sed tristique facilisis. Aenean ornare tortor eu sodales vehicula. Nunc in ligula viverra, consectetur quam sit amet, egestas quam. ',
    factors: '["Parent", "Animal lover", "Like tidiness"]',
  },
  {
    UserId: 4,
    text: 'Quisque libero mi, sagittis ac diam vitae, tincidunt congue tellus. Sed vitae turpis metus. Nunc turpis tortor, aliquam eu nisi ac, interdum elementum erat. Duis porttitor molestie iaculis. ',
    factors: '["Drummer", "Rockstar lifestyle", "Heavy drinker"]',
  },
  {
    UserId: 5,
    text: 'Proin auctor, risus feugiat eleifend pretium, massa turpis cursus tellus, non facilisis lorem turpis id nibh. Donec et ligula mattis, porta tortor ut, sollicitudin quam. Nunc ullamcorper vel erat at interdum.',
    factors: '["Alien", "Conquering world", "Wierd noises"]',
  },
];

const locations = [
  { UserId: 1, coords: '{"lat": 52.0767366, "lng": 12.4820566}', radius: 1000 },
  { UserId: 2, coords: '{"lat": 52.0893600, "lng": 15.6226900}', radius: 1000 },
  { UserId: 3, coords: '{"lat": 52.0890228, "lng": 12.4977744}', radius: 1000 },
  { UserId: 4, coords: '{"lat": 53.1519475, "lng": 16.7234441}', radius: 1000 },
  { UserId: 5, coords: '{"lat": 52.0767366, "lng": 12.4820566}', radius: 1000 },
];

(async () => {
  await db.sequelize.sync({ force: true });
  for (let i = 0; i < users.length; i++) {
    const newUser = await db.User.create(users[i]);
    await newUser.save();
    const newDesc = await db.Description.create(descriptions[i]);
    await newDesc.save();
    const newLocation = await db.Location.create(locations[i]);
    await newLocation.save();
  }
  for (const location of locations) {
    await addPossibleMatches(location, { created: true });
  }
  for (let j = 0; j < users.length; j++) {
    await db.Match.update(
      { status: 1 - (j % 2) },
      { where: { userA: j, userB: 1 } }
    );
  }
})();
