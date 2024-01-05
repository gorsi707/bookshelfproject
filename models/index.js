const sequelize = require("../bin/dbConnection");
const user = require("./definations/user");
const books = require("./definations/books");

const models = { user, books };

user.hasMany(books, { foreignKey: "userId" });

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
