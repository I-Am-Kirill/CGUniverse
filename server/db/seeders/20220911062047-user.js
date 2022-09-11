module.exports = {
  async up(queryInterface, Sequelize) {
    const admin = [
      {
        name: 'admin',
        email: 'admin@admin',
        password: 'admin',
        role: 'admin',
        balance: 99999999,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Users', admin, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
