'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DerivateCriptos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      market: {
        type: Sequelize.STRING
      },
      symbol: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      price_percentage_change_24h: {
        type: Sequelize.FLOAT
      },
      contract_type: {
        type: Sequelize.STRING
      },
      spread: {
        type: Sequelize.INTEGER
      },
      volume_24h: {
        type: Sequelize.BIGINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DerivateCriptos');
  }
};
