const sequelize = require('../database.js');
const DataTypes = require('sequelize');

const User = sequelize.define('user', {
  firstName: {
    type: DataTypes.STRING,
    field: 'first_name'
  },
  lastName: {
    type: DataTypes.STRING,
    field: 'last_name'
  }
}, {
  underscored: true,
})

module.exports = User;
