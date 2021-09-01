'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Restaurants', 'CategoryId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Categories',
        key: 'id'
      },
      onDelete: 'SET NULL',
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Restaurants', 'CategoryId')
  }
}