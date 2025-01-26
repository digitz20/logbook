'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class studentInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      studentInfo.associate=(models)=>{
        studentInfo.hasOne(models.studentAward,{foreignKey:"studentId",as:"studentAward"})
      }
      // define association here
    }
  }
  studentInfo.init({
    studentName: DataTypes.STRING,
    studentClass: DataTypes.STRING,
    studentAge: DataTypes.INTEGER,
    studentemail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'studentInfo',
  });
  return studentInfo;
};