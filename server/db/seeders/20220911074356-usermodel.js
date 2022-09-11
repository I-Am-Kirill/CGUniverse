module.exports = {
  async up(queryInterface, Sequelize) {
    const modelArr = [
      {
        name: 'bomb',
        path: '/models/bomb.glb',
        pic: '/img_models/bomb_pic.png',
        user_id: 1,
        categ_id: 1,
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('UserModels', modelArr, {});
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
