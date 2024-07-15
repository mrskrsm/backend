'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class professor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  professor.init({
    fullname: DataTypes.STRING,
    major: DataTypes.STRING,
    experience: DataTypes.STRING,
    frequency: DataTypes.STRING,
    pres_video: DataTypes.STRING,
    receiving: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'professor',
  });
  return professor;
};