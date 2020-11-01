//const Sequelize = require('sequelize-cockroachdb');

//const sequelize = new Sequelize('defaultdb', 'root', '', {
//  dialect: 'postgres',
//  port: '26257',
//  logging: false
//});
const pg = require('pg');
const config = {
  user: 'admin',
  host: 'localhost',
  database: 'movies',
  port: 2657
}
const pool = new pg.Pool(config);

module.exports = pool;

//module.exports = sequelize;