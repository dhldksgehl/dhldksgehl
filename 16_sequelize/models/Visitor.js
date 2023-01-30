// CREATE TABLE visitor (
//   id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
//   name VARCHAR(10) NOT NULL,
//   comment MEDIUMINT
// )

// TODT: visitor 모델(테이블 구조) 정의
  // mysql -> table = sequelize -> model
// 시퀄라이즈 모델이랑 mysql table 연결
const Visitor = function (Sequelize, DataTypes){
  // Sequelize: models/index.js 의 sequelize
  // DateTypes: models/index.js 의 sequelize
  // Sequelize.define(param1, param2, param3)
  // param1: 모델 이름 설정 -> '' : 문자열
  // param2: 컬럼 정의 -> {} : 객체
  // param3: 모델 옵션 정의 -> {} : 객체

  const model = Sequelize.define(
    'visitor', // -> model에 대한 이름
    {
      // id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      // name VARCHAR(10) NOT NULL,
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      // comment MEDIUMTEXT
      comment: {
        type: DataTypes.TEXT('medium'),
      },
    },
    {
      tableName: 'visitor', // -> 명령어에 대한 이름(실제 DB 테이블 이름)
      freezeTableName: true, // 테이블 이름 고정
      timestamps: false, // 데이터가 추가/수정 시간을 자동으로 컬럼 만들어서 기록
    },
  );
  
  return model;
};

module.exports = Visitor;
// index.js에서 사용했으니까 불러왔다!