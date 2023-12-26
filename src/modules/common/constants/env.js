require("dotenv").config();

const {
  DB_MONGO_HOST,
  DB_MONGO_USER,
  DB_MONGO_PASSWORD,
  DB_MONGO_DATABASE,
  DB_MONGO_PORT,
} = process.env;


module.exports = {
  DB_MONGO_HOST,
  DB_MONGO_USER,
  DB_MONGO_PASSWORD,
  DB_MONGO_DATABASE,
  DB_MONGO_PORT,
};