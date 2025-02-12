// sequelize-cli 자동 생성한 파일
'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
// 위 한줄은 아래내용과 동일
// const a = require
// const a = {
//   "development": {
//     "username": "user",
//     "password": 1234,
//     "database": "kdt",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {},
//   "production": {}
// }
// const config = a["development"];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
  );
// sequelize 객체 선언시 매개변수로 정보들을 받음

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = { sequelize: sequelize, Sequelize: Sequelize };

db.Visitor = require('./Visitor')(sequelize, Sequelize);
// models/Visitor.js 정의한 model이 db.Visitor에 들어감
// db = { sequelize: sequelize, Sequelize: Sequelize, Visitor: ? }

module.exports = db;
// db 변수 내보냄 -> 다른 파일에서 사용하기 떄문