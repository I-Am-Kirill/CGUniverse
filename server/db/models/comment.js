const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, UserModel }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(UserModel, { foreignKey: 'model_id' });
    }
  }
  Comment.init({
    text: DataTypes.TEXT,
    model_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
