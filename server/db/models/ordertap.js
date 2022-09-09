const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderTap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Order, User, Categ, UserModel,
    }) {
      this.belongsTo(Order, { foreignKey: 'order_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Categ, { foreignKey: 'categ_id' });
      this.belongsTo(UserModel, { foreignKey: 'model_id' });
      // define association here
    }
  }
  OrderTap.init({
    order_id: DataTypes.INTEGER,
    model_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    path: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    categ_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'OrderTap',
  });
  return OrderTap;
};
