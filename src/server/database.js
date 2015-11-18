const Sequalize = require('sequelize');

const sequalize = new Sequalize('flex_appeal', 'homestead', 'secret', {
  host: '127.0.0.1',
  port: 33060,
});

module.exports = sequalize;
