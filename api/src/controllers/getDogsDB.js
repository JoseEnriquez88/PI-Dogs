const { Dogs } = require("../db");

const getDogDB = async () => {
  const allDogs = await Dogs.findAll();
  return allDogs;
};

module.exports = getDogDB;
