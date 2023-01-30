-- cd /usr/local/mysql/bin
-- ./mysql -u root -p
-- (window -> 경로에 공백이 있는 경우 ""사용)

-- 데이터 베이스 목록보기
SHOW databases;

-- 데이터 베이스 생성 + 한글 인코딩
CREATE DATABASE name DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

-- 데이터 베이스 선택(사용)
USE name;

-- 데이터 베이스 내 테이블 목록 보기
SHOW tables;

-------------------------------
-- DDL
-- 테이블 생성
/*
  CREATE TABLE tablename (
    필드 1 값형식,
    필드 2 값형식
  );
  * 세미콜론 확인 & 마지막 콤마 X *
*/

CREATE TABLE visitor (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
  );

-- 테이블 구조 확인
DESC visitor;

-- DML
-- 테이블 전체 데이터 조회 (read)
SELECT * FROM visitor;

-- 테이블 데이터 추가 (create)
INSERT INTO visitor (id, name, comment) VALUES (1, '홍길동', '내가 왔다.');
INSERT INTO visitor (id, name, comment) VALUES (2, '이찬혁', '으라차차');
INSERT INTO visitor (name, comment) VALUES ('이수현', '가가각');
INSERT INTO visitor (name, comment) VALUES ('아이유', '냥');
-- id는 INCREMENT로 자동으로 증가하기때문에 생략가능
--ex) INSERT INTO visitor (name, comment) VALUES ('홍길동', '내가 왔다.');

-- 테이블 데이테 삭제 (delete)


-------------------------------------------
-- DCL
-- mysql 사용자 추가 (user 계정)
CREATE USER 'user'@'%' IDENTIFIED BY '비밀번호';
-- user 계정에 bd 권한 부여 (모든 db에 접근 가능 설정)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
-- 현재 사용중인 mysql 캐시 지우고 새로운 설정 적용
FLUSH PRIVILEGES;

-- 비밀번호 변경하고 싶다면?
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '비밀번호';
