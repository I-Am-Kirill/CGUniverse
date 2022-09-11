const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      User, Category, Comment, LikeModel, Favorites,
    }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Category, { foreignKey: 'categ_id' });
      this.hasMany(Comment, { foreignKey: 'model_id' });
      this.hasMany(LikeModel, { foreignKey: 'model_id' });
      this.hasMany(Favorites, { foreignKey: 'model_id' });
    }
  }
  UserModel.init({
    name: DataTypes.STRING,
    path: DataTypes.TEXT,
    pic: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    categ_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'UserModel',
  });
  return UserModel;
};
