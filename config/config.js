require("dotenv").config();

const secrets = {
  APP_NAME: "BookStore",

  domain: process.env.APP_URL,
  port: Number(process.env.PORT),
  dbUrl: process.env.DB_URL,
  dbcUrl: process.env.DBC_URL,
  passwordSaltNo: process.env.SALTROUNDS,
  JWT_Secret: process.env.JWT_SECRET,
};

module.exports = secrets;
