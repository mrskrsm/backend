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

    await queryInterface.bulkInsert('students', [
      {
        surname: "Foà",
        name: "Sabatino",
        date_birth: "2003-11-14",
        email: "sabatino.foà@libero.it",
        phone_number: "+39 41 10484185",
        notes: "Nulla qui ipsum nihil rem qui. Fuga consequuntur eius molestias quis. Iste sed inventore sit possimus dolores.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        surname: "Boccioni",
        name: "Silvio",
        date_birth: "2003-08-08",
        email: "silvio.boccioni@tim.it",
        phone_number: "+39 9187 18590644",
        notes: "Distinctio totam laborum omnis. Quas ab nobis repellendus. Molestias debitis blanditiis ipsam. Officia maiores velit. Amet temporibus architecto occaecati a.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        surname: "Martucci",
        name: "Ernesto",
        date_birth: "2006-04-05",
        email: "ernesto.martucci@poste.it",
        phone_number: "+39 71 91745677",
        notes: "Veniam voluptatum ullam doloribus recusandae. Omnis placeat quasi fuga assumenda maiores minus. Rerum quam magnam odio dolores fugiat. Omnis mollitia aspernatur unde eveniet ducimus.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        surname: "Trapanese",
        name: "Marcella",
        date_birth: "2006-02-28",
        email: "marcella.trapanese@vodafone.it",
        phone_number: "+39 8815 20357332",
        notes: "Aspernatur nobis placeat vitae esse eaque quaerat. Expedita reiciendis praesentium. Tenetur voluptas beatae deleniti.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        surname: "Grifeo",
        name: "Dolores",
        date_birth: "2005-02-10",
        email: "dolores.grifeo@fastwebnet.it",
        phone_number: "+39 59 1711207",
        notes: "Placeat eveniet possimus necessitatibus doloremque amet modi. Quae minima non maxime. Fuga repudiandae qui.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('students');
  }
};