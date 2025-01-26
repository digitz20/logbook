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
      studentAward.associate=(models)=>{
        studentAward.belongsTo(models.studentInfo,{foreignKey:"studentId",as:"studentInfo"})
      }
      // define association here
    }
  }
  studentAward.init({
    studentId: {type : DataTypes.STRING, references:{model:"studentInfo", key: "id"}},
    awardName: DataTypes.STRING,
    studentRating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'studentAward',
  });
  return studentAward;
};