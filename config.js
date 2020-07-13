require("dotenv").config();

const secrets = {
  APP_NAME: "BookStore",

  domain: process.env.APP_URL,
  port: process.env.PORT,
  env: process.env.APP_ENV,

  dbUrl: process.env.DB_URL,
  dbcUrl: process.env.DBC_URL,
  dbName: process.env.DB_NAME,
  passwordSaltNo: process.env.SALTROUNDS,
  JWT_Secret: process.env.JWT_SECRET,
};

module.exports = secrets;
