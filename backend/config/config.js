
require('dotenv').config();

module.exports = {
  development: {
  username: process.env.DB_USER,
  password: process.env.DB_PASS ?? null,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: "mysql",
  logging: false,

  pool: {
    max: 5,           // max open connections
    min: 0,           // min idle connections
    acquire: 20000,   // max time (ms) Sequelize will try to get connection before throwing error
    idle: 10000       // time (ms) a connection can be idle before being released
  },

  dialectOptions: {
    connectTimeout: 10000 // time (ms) before timing out MySQL connection attempt
  }
},

  // production: {
  //   username: "root",
  //   password: null,
  //   database: "database_production",
  //   host: "127.0.0.1",
  //   dialect: "mysql"
  // }
  // Add production config as needed
};



