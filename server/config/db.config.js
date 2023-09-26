const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  USER:process.env.USER,
  HOSTNAME: process.env.HOSTNAME,
  PASS: process.env.PASSWORD,
  DB: process.env.DATABASE
};