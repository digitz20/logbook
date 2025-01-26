'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class studentAward extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  studentAward.init({
    studentId: DataTypes.STRING,
    awardName: DataTypes.STRING,
    studentRating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'studentAward',
  });
  return studentAward;
};