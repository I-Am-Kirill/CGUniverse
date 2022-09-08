module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LikeModels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      model_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'UserModels',
          },
          key: 'id',
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('LikeModels');
  },
};
