'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    static associate(models) {
      // define association here
    }
  }
  Ticket.init({
    ticketId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    anyDesk: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    technician: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ticket',
    timestamps: false
  });
  return Ticket;
};