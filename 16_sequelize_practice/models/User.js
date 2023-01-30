// CREATE TABLE user (
//   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//   userid VARCHAR(20) NOT NULL,
//   name VARCHAR(10) NOT NULL,
//   pw VARCHAR(20) NOT NULL
// );

const User = function (Sequelize, DateTypes) {
  const model = Sequelize.define(
    "user",
    {
      id: {
        type: DateTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        type: DateTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DateTypes.STRING(10),
        allowNull: false,
      },
      pw :{
        type: DateTypes.STRING(20),
        allowNull: false,
      }
    },
    {
      tableName: 'user',
      freezeTableName: true,
      timestamps: false, 
    }
  );

  return model;
};

module.exports = User;