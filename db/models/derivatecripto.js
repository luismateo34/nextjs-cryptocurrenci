'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DerivateCripto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DerivateCripto.init({
    market: DataTypes.STRING,
    symbol: DataTypes.STRING,
    price: DataTypes.STRING,
    price_percentage_change_24h: DataTypes.FLOAT,
    contract_type: DataTypes.STRING,
    spread: DataTypes.INTEGER,
    volume_24h: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'DerivateCripto',
  });
  return DerivateCripto;
};
