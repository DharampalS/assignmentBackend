const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  logging: false,
  dialect: config.dialect,
  operatorsAliases: false,
  define: {
    engine: "InnoDB",
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../models/users.js")(sequelize, Sequelize);
db.sequelize.sync();
module.exports = db;