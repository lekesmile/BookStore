

require('dotenv').config();



const secrets = {
  APP_NAME: 'BookStore',

  domain: process.env.APP_URL,
  port: process.env.PORT,
  env: process.env.APP_ENV,

  dbUrl: process.env.DB_URL,
  dbName: process.env.DB_NAME,
  passwordSaltNo: process.env.saltRounds

}

module.exports = secrets;