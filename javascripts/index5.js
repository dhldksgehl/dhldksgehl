// 조건문
// 어떤 조건에 따라 논리 구조를 분기(나눔)
//  -> 조건에 따라 서로 다른 문장을 실행

// 연산자
// 동등 연산자: ==.!=, ===, !==
console.log(1 == 1); // true
console.log(1 == 2); // false
console.log(1 != 1); // false
console.log(1 != 2); // true
console.log('1' == 1); // true
console.log('2' != 1); // true
// ==, != : 타입(자료형)이 달라도 괜찮음! 값만 비교

console.log('---')
console.log(1 === 1); // true
console.log(1 === 2); // false
console.log(1 !== 1); // false
console.log(1 !== 2); // true
console.log('1' === 1); // false
console.log('2' === 1); // false
//  ===, !== : 타입(자료형)이랑 값을 모두 비교

// 비교 연산자
//  >, <, >=, <=
console.log('---')
console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(1 >= 1); // true
console.log(1 <= 1); // true

// 논리 연산자
// &&: and (둘 다 참이어야 참)
// ||: or (둘 중 하나라도 참이면 참)
// !: not (참 -> 거짓, 거짓 -> 참)

console.log('---');
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log(!true); // false
console.log(!false); // true
console.log(!!false); // false

console.log('---');
console.log((2 > 1) && (-2 < 1)); // true

console.log(!(2 > 1)); // !true => false
console.log(((2 > 1) && (-2 < 1)) || (5 > 2));
// ( true && true ) || true => true

// -------------------------------
if (5 > 3) {
  console.log('bigger!')
}

// 함수안에서 조건문을 사용한다면?
function isBig() {
  if (5 > 3) {
    return 'bigger';
  }
}
console.log(isBig());

// if-else
if (5 < 3) {
  console.log('bigger');
} else {
  console.log('smaller..')
}

// if - else if
// else if 키워드: 여러 개 가능
if (5 < 3) {
  console.log('smaller');
} else if (5 > 3) {
  console.log('bigger')
} else if (5 == 3) {
  console.log('same')
}

// 퀴즈
let score = 80;

// 90이상 A
// 80이상 B
// 70이상 C
// 60이상 D
// 50미만 E

if (90 <= score) {
  console.log('A')
} else if (80 <= score) {
  console.log('B')
} else if (70 <= score) {
  console.log('C')
} else if (60 <= score) {
  console.log('D')
} else {
  console.log('F')
}

// 조건문 중첩
// 가입한 아이디, 비번
let usrId = 'user';
let usrPw = '1234';
// 로그인할 떄 입력한 아이디, 비번
let inputId = 'user';
let inputPw = '1234';

// 아이디가 일치
//    ㄴ 비밀번호 일치 -> 인사
//    ㄴ 비밀번호 불일치 -> 불일치
// 아이디가 불일치 -> 아이디 없음

if (usrId == inputId) {
  // 조건문 중첩
  if (usrPw == inputPw) {
    console.log(`${usrId}님 하이`)
  } else {
    console.log('비밀번호 틀림')
  }
} else {
  console.log('아이디 없음')
}

//--------------------------

// step1. (조건문) 홀짝을 구별하는 조건문 생성
// - n 변수를 선언하고 6을 할당
// - num이 짝수라면 콘솔창에 "짝수" 출력
// - num이 홀수라면 콘솔창에 "홀수" 출력
// - 힌트) 짝수는 2로 나누어 떨어지는 수이다. 즉, 짝수는 2로 나눈 나머지가 0과 같다.
//    나머지 연산자 : % -> n을 2로 나눈 나머지가 0인가?

// step2. (함수 + if-esle 조건문) 짝수인지 판별하는 함수 isEven() 정의하고 호출하기
// - isEven() 함수는 매개변수 x 를 가짐
// - 매개변수 x의 값이 짝수라면, true 반환
// - 매개변수 x의 값이 홀수라면, false 반환

var num = 6

function isEven(x) {
  if (x % 2 == 0) {
    return true
  } else if (x % 2 == 1) {
    return false
  }
}
console.log(isEven(num)); // true

// console.log(isEven(8)); // true
// console.log(isEven(7)); // false



// ======================================
// Q. (함수 + if-else if-else 조건문) 색상을 얻는 getColor() 함수 정의하고 호출하기
// - getColor() 함수는 매개변수 sign을 가짐
// - 매개변수 sign의 값이 'go'이면, 'green'을 반환
// - 매개변수 sign의 값이 'slow'이면, 'yellow'를 반환
// - 매개변수 sign의 값이 'stop'이면, 'red'를 반환

function getColor(sign) {
  if (sign == 'go') {
    return 'green';
  } else if (sign == 'slow') {
    return 'yellow'
  } else if (sign == 'stop') {
    return 'red'
  }
}
// console.log(getColor('go')); // green
// console.log(getColor('slow')); // yellow
// console.log(getColor('stop')); // red


// ======================================
// (중첩 조건문)
// Q.
// - isValidate 함수는 비밀번호를 의미하는 pw1, pw2 두 개의 매개변수를 가짐
// - pw1은 길이가 5 이상이라면,
//      - pw1과 pw2가 같다면, ''비밀번호 일치~' 반환
//      - pw1과 pw2가 같지 않다면, ''비밀번호 불일치..' 반환
// - pw1의 길이가 5 미만이라면, '비밀번호는 5자리 이상!!!' 반환

function isValidate(pw1, pw2) {
  if (pw1.length >= 5) {
    if (pw1 == pw2) {
      return "비밀번호 일치~"
    } else if (pw1 != pw2) {
      return "비밀번호 불일치.."
    }
  } else if (pw1.length < 5) {
    return "비밀번호는 5자리 이상!!!"
  }
}

// 브라우저 콘솔창 확인 결과
console.log(isValidate('1234', '1234')); // '비밀번호는 5자리 이상!!!'
console.log(isValidate('12345', '12345')); // '비밀번호 일치~'
console.log(isValidate('12345', '12345!!')); // '비밀번호 불일치..'


// ======================================
// Q. 바로 위에 문제에서 조건 추가!!
// 비밀번호 확인 조건이 추가되었습니다.
// - pw1은 길이가 5 이상이고 8이 이하라면,
//      - pw1과 pw2가 같다면, ''비밀번호 일치~' 반환
//      - pw1과 pw2가 같지 않다면, ''비밀번호 불일치..' 반환
// - pw1의 길이가 5 미만이거나 8 초과라면, '비밀번호는 5자리 이상 8자리 이하!!!' 반환
function isValidate2(pw1, pw2) {
  if (pw1.length >= 5 && pw1.length <= 8) {
    if (pw1 == pw2) {
      return "비밀번호 일치~"
    } else if (pw1 != pw2) {
      return "비밀번호 불일치.."
    }
  } else if (pw1.length < 5 || pw1.length > 8) {
    return "비밀번호는 5자리 이상 8자리 이하!!!"
  }
}

// 브라우저 콘솔창 확인 결과
console.log(isValidate2('1234', '1234')); // '비밀번호는 5~8자리만 가능!!!'
console.log(isValidate2('123456789', '123456789')); // '비밀번호는 5~8자리만 가능!!!'
console.log(isValidate2('12345', '12345')); // '비밀번호 일치~'
console.log(isValidate2('12345', '12345!!')); // '비밀번호 불일치..'


// ------------------------------------------------
// switch 문
// - 하나 이상의 case 문으로 구성
// - default 문이 있는데 필수는 아님 -> 작성 권장
// - break 키워드: 블록(중괄호, {})을 빠져나갈 때 사용하는 키워드

/*
  Switch 문의 기본 구조

  switch(x) {
    case 값: // if (x === 값)
      // x가 값과 같을 떄 실행할 문장
      break; // x가 값과 같을 때의 문장을 실행 -> 블록을 빠져나옴
    case 값2: // if (x === 값2)
      // x가 값2와 같을 때 실행할 문장
      break; // x가 값2와 같을 때의 문장을 실행 -> 블록을 빠져나옴
    default: // else
      // x가 cas에 있는 어떤 것과도 일치하지 않았을 때 실행할 문장
      break; // 블록을 빠져나옴
  }
*/

let a = 2 + 2; // typeof -> number

switch (a) {
  case 3:
    console.log('비교하려는 값보다 작습니다.');
    break;
  case 4:
    console.log('비교하려는 값과 일치합니다.');
    break;
  case 5:
    console.log('비교하려는 값보다 큽니다.')
    break;
  default:
    console.log('어떤 값인지 파악 안됨')
    break;
}

// switch -> if 문
if (a === 3) {
  console.log('비교하려는 값보다 작습니다.');
} else if (a === 4) {
  console.log('비교하려는 값과 일치합니다.');
} else if (a === 5) {
  console.log('비교하려는 값보다 큽니다.');
} else {
  console.log('어떤 값인지 파악안됨')
}

let b = 'red';

switch (b) {
  case 'blue':
    console.log('파랑');
    break;
  case 'red':
    console.log('빨강');
    break;
  default:
    console.log('냠냠');
    break;
}


// 퀴즈) switch 문으로 작성
var grade = "A";
// A: 학점 A
// B: 학점 B
// C: 학점 C
// D: 학점 D
// F: 학점 F
// 나머지: 학점 오류발생

switch (grade) {
  case "A":
    console.log('학점 A');
    break
  case "B":
    console.log('학점 B');
    break
  case "C":
    console.log('학점 C');
    break
  case "D":
    console.log('학점 D');
    break
  case 'F':
    console.log('학점 F');
    break
  default:
    console.log('학점 오류발생')
}

// 여러 개의 case 문을 묶을 수 있음
// a = 4
switch (a) {
  case 1:
    console.log('비교하려는 값보다 작습니다.');
    break;
  case 2:
    console.log('비교하려는 값보다 작습니다.');
    break;
  case 3:
    console.log('비교하려는 값보다 작습니다.');
    break;
  case 4:
    console.log('비교하려는 값과 일치합니다.');
    break;
  case 5:
    console.log('비교하려는 값보다 큽니다.');
    break;
  case 6:
    console.log('비교하려는 값보다 큽니다.');
    break;
  case 7:
    console.log('비교하려는 값보다 큽니다.');
    break;
  case 8:
    console.log('비교하려는 값보다 큽니다.');
    break;
  case 9:
    console.log('비교하려는 값보다 큽니다.');
    break;
  default:
    console.log('어떤 값인지 파악 안됨');
    break;
}

// ->
a = 6; // 재할당
switch (a) {
  case 1:
  case 2:
  case 3:
    console.log('비교하려는 값보다 작습니다.');
    break;
  case 4:
    console.log('비교하려는 값과 일치합니다.');
    break;
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
    console.log('비교하려는 값보다 큽니다.');
    break;
  default:
    console.log('어떤 값인지 파악 안됨');
    break;
}

// 수식비교는 if문


//-----------------
// 삼항 연산자
// - 3개의 피연산자를 필요로 함
// 조건식 ? (참일 떄 실행할 코드):(거짓일 떄 실행할 코드)

// 짝홀 구별 (ver. if문)
var num = 3;
if (num % 2 === 0) {
  console.log("짝수");
} else {
  console.log('홀수');
}

// 짝홀 구별 (ver. 삼항 연산자)
var result = (num % 2 == 0) ? '짝수' : '홀수';
console.log(result);
// console.log((num % 2 == 0) ? '짝수' : '홀수');

console.log(3 > 1 ? 'bigger' : 'smaller');

// 퀴즈)
// 현재 시간을 입력받는 변수 hour 선언
// 삼항 연산자를 이용해 hour 시간에 따라 오전/ 오후를 출력하기

// let hour = 10;
// console.log(hour < 13 ? '오전' : '오후');

let hour = 10;
let now = hour < 13 ? '오전' : '오후';
console.log(now);


