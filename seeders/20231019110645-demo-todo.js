'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Todos', 
    [
      {
      title: 'todo 1',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      title: 'todo 2',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      title: 'todo 3',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      title: 'todo 4',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      title: 'todo 5',
      createdAt: new Date(),
      updatedAt: new Date()
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
