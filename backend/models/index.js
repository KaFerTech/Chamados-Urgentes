const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

const Ticket = sequelize.define('Ticket', {
  ticketId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  anyDesk: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  technician: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: true,
});

sequelize.sync(); // Certifique-se de que as tabelas são criadas

module.exports = {
  sequelize,
  Ticket,
};