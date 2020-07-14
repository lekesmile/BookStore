require("dotenv").config();

const secrets = {
  APP_NAME: "BookStore",

  PORT: Number(process.env.PORT),
  DB_URL: process.env.DB_URL,
  DBC_URL: process.env.DBC_URL,
  SALTROUNDS: Number(process.env.SALTROUNDS),
  JWT_SECRET: process.env.JWT_SECRET,
};

module.exports = secrets;
