
const Sequelize = require('sequelize');
const sequelize = new Sequelize('demo', 'root',null, {
    host: 'localhost',
    dialect: 'mysql',
    logging:false});

let connectDB =()=>{
    sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

}
module.exports= connectDB;