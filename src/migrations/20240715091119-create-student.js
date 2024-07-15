const studentsList = require('./studentsList');

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      surname: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      date_birth: {
        type: Sequelize.DATEONLY
      },
      email: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.TEXT
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

    await queryInterface.bulkInsert('students', studentsList)
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('students');
  }
};