-- DDL
-- Data Definition Language: 데이터 베이스/ 테이블 정의

-- [데이터베이스 관련 명령어]
-- 1. 데이터베이스 생성
    CREATE DATABASE kdt DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
    CREATE DATABASE member DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;


-- 2. 데이터베이스 생성 확인(목록 조회)
SHOW databases;

-- 3. 데이터베이스 사용 선언
USE kdt;

-- 4. 데이터 베이스 삭제
DROP DATABASE kdt;

-- [테이블 관련 명령어]
-- 1. 테이블 생성
/* CREATE TABLE 테이블명 (
  필드1 값 형식, 
  필드2 값 형식
)*/

-- 제약조건
-- NOT NULL : NULL 허용 X
-- NOT NULL : NULL 허용 X
-- AUTO_INCRMENT : 자동 숫자 증가
-- PRIMARY KEY : 기본키
-- DEFAULT : 기본 값
-- UNIQUE : 중복 허용 X
CREATE TABLE user (
  id INT NAT NULL AUTO_INCRMENT PRIMARY KEY,
  name VARCHAR(10) NOT NULL,
  age INT NOT NULL,
  address VARCHAR(100) NOT NULL
);

CREATE TABLE member (
  id VARCHAR(20) NOT NULL PRIMARY KEY,
  name VARCHAR(5) NOT NULL,
  age INT(2),
  gender VARCHAR(2) NOT NULL,
  email VARCHAR(50),
  promotion VARCHAR(2) DEFAULT 'x'
)

CREATE TABLE user2 (
  id VARCHAR(10) NOT NULL PRIMARY KEY,
  pw VARCHAR(20) NOT NULL,
  name VARCHAR(5) NOT NULL,
  gender ENUM('F', 'M', '') DEFAULT '',
  birthday DATE NOT NULL,
  age int(3) NOT NULL DEFAULT 0
)
-- 2. 테이블 목록 확인
SHOW TABLES;
 
 -- 3. 테이블 구조 확인
 DESC user; 

 -- 4. 테이블 삭제
 -- DROP : 다 삭제 (구조 자체를 삭제)
 -- TRUNCATE : 초기화 (모든 행 삭제)
 DROP TABLE user;
 TRUNCATE TABLE user;

-- snake_case 사용

 -- 5. 테이블 수정 (구조 수정)
 -- 5-1. 컬럼 추가 (ADD)
 ALTER TABLE user ADD new_column VARCHAR(10);

 -- 5-2. 컬럼 수정 (MODIFY)
 ALTER TABLE user MODIFY new_column INT;

 -- 5-3. 컬럼 삭제 (DROP)
 ALTER TABLE user DROP new_column;


-- ##########################################################
-- DML
-- Data Mainpulation Language : 데이터 조작어
-- 내부 데이터를 관리하기 위한 언어

DROP TABLE user;
CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(10) NOT NULL,
  age INT NOT NULL,
  address VARCHAR(100)
);
DESC user; -- 생성한 테이블 구조 확인


-- [Create - INSERT]
-- : 데이터 추가
-- 참고) AUTO_INCREMENT 컬럼의 값은 굳이 넣지 않으면 알아서 증가
-- NULL 이라고 넣으면 알아서 숫자가 지정되기도 함
-- 주의) AUTO_INCREMENT 
INSERT INTO user (name, age, address) VALUES ('김민정', 20, '서울특별시 마포구');
INSERT INTO user (name, age, address) VALUES ('이지수', 30, '서울특별시 강남구');
INSERT INTO user (name, age, address) VALUES ('최솔이', 22, '대구광역시 동구');
INSERT INTO user (name, age, address) VALUES ('한소희', 25, '부산광역시 관악구');
INSERT INTO user (name, age, address) VALUES ('정세희', 19, '서울특별시 노원구');
INSERT INTO user (name, age, address) VALUES ('이한이', 23, '서울특별시 강서구');
INSERT INTO user (name, age, address) VALUES ('이지은', 32, '부산광역시 동구');
INSERT INTO user (name, age, address) VALUES ('윤세희', 37, '강원도 강릉시');
INSERT INTO user (name, age, address) VALUES ('박수진', 26, '서울특별시 공주시');
INSERT INTO user (name, age, address) VALUES ('박찬희', 40, '강원도 속초시');
INSERT INTO user (name, age, address) VALUES ('권희수', 36, '서울특별시 영등포구');

INSERT INTO user2 (id, pw, name, gender, birthday, age) VALUES ('hong1234', '8o4bkg' ,'홍길동', 'M', '1990-01-31', 33);
INSERT INTO user2 (id, pw, name, gender, birthday, age) VALUES ('sexysung', '87awjldf' ,'성춘향', 'F', '1992-03-31', 31);
INSERT INTO user2 (id, pw, name, gender, birthday, age) VALUES ('power70', 'qxur8sda' ,'변사또', 'M', '1970-05-02', 53);
INSERT INTO user2 (id, pw, name, gender, birthday, age) VALUES ('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO user2 (id, pw, name, gender, birthday, age) VALUES ('widowmaker', '38ewifh3' ,'위도우', 'F', '1976-06-27', 47);
INSERT INTO user2 (id, pw, name, gender, birthday, age) VALUES ('dvadva', 'k3f3ah' ,'송하나', 'F', '2001-06-03', 22);
INSERT INTO user2 (id, pw, name, gender, birthday, age) VALUES ('jungkrat', '4iha7f' ,'정크랫', 'M', '1999-11-11', 24);

-- [Read - SELECT]
-- 데이터 읽기 (조회)
-- * : all
-- id, name, age, address
SELECT * FROM user; -- 해당 테이블의 전체 데이터를 조회
SELECT name FROM user; -- 이름 컬럼만 조회
SELECT age, name FROM user; -- 나이, 이름 컬럼 조회
SELECT id, address FROM user; -- id, 주소 컬럼 조회

-- WHERE절 : 특정 조건을 만족하는 행(record, tuple) 선택
SELECT * FROM user WHERE age >= 25; -- 나이가 25 이상인 사람
SELECT * FROM user WHERE id = 7; -- id가 7인 사람
SELECT name FROM user WHERE id = 7; -- id가 7인 사람의 이름만 조회
SELECT id, age, FROM user WHERE name = '이지은'; -- 이름이 '이지은'인 사람의 id, age 조회


-- ORDER BY절 : 데이터 정렬
-- ASC : 오름차순 (기본값)
-- DESC : 내림차순
SELECT * FROM user ORDER BY age DESC; -- age 컬럼 내림차순
SELECT * FROM user WHERE id > 6 ORDER by age ASC; -- id가 6이상인 사람중에서 age 컬럼 오름차순
SELECT * FROM user ORDER BY name ASC; -- name 컬럼 오름차순 정렬 (가나다순)


-- LIKE : 패턴 조회
-- % : 0개 이상의 문자
-- _ : 1개의 단일 문자
SELECT * FROM user WHERE address LIKE '서울%'; -- '서울'로 시작하는 주소인 데이터
SELECT * FROM user WHERE name LIKE '__희'; -- 이름의 마지막 글자가 '희'인 데이터
-- 질문) 구문에서 이름이 4글자이거나 2글자인 사람은 제외되는건가요? 네!
SELECT * FROM user WHERE name LIKE '%희%'; -- 이름에 '희'가 있는 데이터
SELECT * FROM user WHERE address LIKE '%광역%'; -- 주소에 '광역'이 포함된 데이터
SELECT * FROM user WHERE name LIKE '__희' ORDER by age DESC;
-- 이름의 마지막 글자가 '희'인 사람들 나이를 기준으로 내림차순


-- LIMIT : 데이터 개수 제한
SELECT * FROM user LIMIT 3; -- 전체 데이터중에 3가지
SELECT * FROM user WHERE address LIKE '서울%' LIMIT 2; -- 

-- BETWEEN a AND b : 사이값 조회
SELECT * FROM user WHERE age BETWEEN 25 AND 30;


-- IN (list) : 리스트 있는 것 중에 일치하면 참
SELECT * FROM user WHERE age IN (20, 21, 22, 23);

-- IS NULL
-- IS NOT NULL
INSERT INTO user (name, age) VALUES('서현승', 28);
SELECT * FROM user;

SELECT * FROM user WHERE address IS NULL;
SELECT * FROM user WHERE address IS NOT NULL;

-- 논리연산자 : AND, OR, NOT
SELECT * FROM user WHERE address IS NOT NULL AND age < 25;
-- SELECT * FROM user() WHERE address IS NOT NULL AND age < 25); -- 이걸 만족하는 값
SELECT * FROM user WHERE address IS NOT NULL OR age < 25;
SELECT * FROM user WHERE name LIKE '이%' AND age = 23; -- 이씨이자 23세인 사람

-- [Update - UPDATE]
-- : 데이터 갱신 (수정)
-- : 참고) error code: 1175.
-- 테이블 데이터를 update/delete하려고 할 때 key 컬럼을 이용해서 수정/삭제하는 것이 바람직함.
UPDATE user SET address = '서울특별시 강북구' WHERE name = '이한이'; -- X
UPDATE user SET address = '서울특별시 강북구' WHERE id = 1;
UPDATE user SET address = '제주특별자치도 제주시', name = '이지현' WHERE id = 2;

-- 주의) update where절 미사용시, 모든 행의 데이터가 변경됨
-- update에서는 where절이 항상 따라다님


-- [Delete - DELETE]
-- : 데이터 삭제
-- 주의) delete where절 미사용시, 모든 행의 데이터가 삭제됨
-- delet에서는 where절이 항상 따라다님
DELETE FROM user WHERE id = 11;
DELETE FROM user WHERE id > 8;


-- #######################
-- DCL
-- Date Control Lan