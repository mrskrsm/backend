'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('professors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullname: {
        type: Sequelize.STRING
      },
      major: {
        type: Sequelize.STRING
      },
      experience: {
        type: Sequelize.STRING
      },
      frequency: {
        type: Sequelize.STRING
      },
      pres_video: {
        type: Sequelize.STRING
      },
      receiving: {
        type: Sequelize.BOOLEAN
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

    await queryInterface.bulkInsert('professors' ,[
      {
          fullname: "Alessandro Rossi",
          major: "Fisica",
          experience: "15 anni",
          frequency: "Lunedì, Mercoledì, Venerdì",
          pres_video: "presenza",
          receiving: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          fullname: "Beatrice Bianchi",
          major: "Chimica",
          experience: "10 anni",
          frequency: "Martedì, Giovedì",
          pres_video: "videocall",
          receiving: false,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          fullname: "Carlo Verdi",
          major: "Informatica",
          experience: "8 anni",
          frequency: "Lunedì, Mercoledì",
          pres_video: "presenza",
          receiving: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          fullname: "Daniela Neri",
          major: "Matematica",
          experience: "12 anni",
          frequency: "Martedì, Giovedì, Venerdì",
          pres_video: "videocall",
          receiving: true,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          fullname: "Elena Grassi",
          major: "Biologia",
          experience: "20 anni",
          frequency: "Lunedì, Martedì, Mercoledì",
          pres_video: "presenza",
          receiving: true,
          createdAt: new Date(),
          updatedAt: new Date()
      }]
    )
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('professors');
  }
};