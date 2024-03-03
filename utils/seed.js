const { User } = require("../models");
const connection = require("../config/connection");

const users = [
  {
    username: "Michael",
    email: "michael@gmail.com",
    thought: [],
  },
];

connection.once("open", async () => {
  await User.deleteMany({});
  await User.collection.insertMany(users);
  console.info("Database seeded");
  process.exit(0);
});