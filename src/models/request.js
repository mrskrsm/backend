'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  request.init({
    student_id: DataTypes.INTEGER,
    professor_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    date_requested: DataTypes.DATEONLY,
    time_requested: DataTypes.TIME,
    approved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'request',
  });
  return request;
};