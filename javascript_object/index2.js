// JS 표준 내장 객체
// 기본적으로 (이미) 가지고 있는 객채
// String, Number, Array, Date, Math, ...

// -----------------
// Date 객체
// 시간, 날짜에 대한 정보를 얻기 위함

let now = new Date();
console.log(now);

// ms
// 1970-01-01 09:00:00 를 기준으로
console.log(new Date(0));
console.log(new Date(80000));


// new Date(y, m, d, h, m, s, ms)
// year: 4자리
// month: 0(1월) ~ 11(12월) 주의 ***
// date: 1 ~ 31 -> 생략하면, 1으로 처리
// hour, minutes, seconds, ms
console.log(new Date(2018, 2, 2));
console.log(new Date(2018, 2, 2, 18, 20, 30));

console.log(new Date(2022, 08, 30, 10, 53));

// Date 객체 메서드
// 메서드를 이용해서 년, 월, 일 등의 값을 얻기
console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth()); // 0(1월) ~ 11(12월)
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getDay()); // 요일: 0(일) ~ 6(토)



// 퀴즈
// Date 객체를 이용해 오늘 요일을 얻고,
// switch-case문과 if문으로 오늘이 평일/주말 구별해보자
// if 문

console.log(now)
let day = now.getDay()
console.log(day);

switch (day) {
  case 0:
  case 6:
    console.log('주말')
    break
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log('평일')
    break
  default: // 권유
    console.log('뭐야')
    break
}

if (now == 1 || now == 6) {
  console.log('주말')
} else if (now >= 2 || now <= 5) {
  console.log('평일')
}

// ------------------
// Math 객체
// 수학적인 상수와 함수를 위한 속성과 메서드

// 속성과 메서드의 차이는 ()가 있느냐 없느냐

// 속성
console.log(Math.E); // 자연로그 밑
console.log(Math.PI); // 파이
console.log(Math.SQRT2); // 2의 제곱근

// 메서드
console.log(Math.min(100, 200, 30, 7)); // 최소값
console.log(Math.max(100, 200, 30, 7)); // 최댓값
console.log(Math.round(6.5)); // 반올림
console.log(Math.round(6.3)); // 반올림
console.log(Math.floor(6.5)); // 반내림
console.log(Math.floor(6.3)); // 반내림
console.log(Math.ceil(6.5)); // 올림
console.log(Math.ceil(6.3)); // 올림

// 메서드를 메서드로 감싸서도 사용가능
console.log(Math.floor(Math.max(1.1, 2.2, 3.3, 7.7)));
console.log(Math.floor(7.7));
console.log(7);

// 0 <= x < 1 범위의 난수
console.log(Math.random());


// 0 <= 10x < 10: from 0 to 9
console.log(Math.floor(Math.random() * 10));

// ***
// 0 <= 10x < 10: from 0 to 9
console.log(Math.floor(Math.random() * 10));

// 퀴즈) Returns a random integer from 1 to 10:
// console.log(Math.ceil(Math.random() * 10));
console.log(Math.floor(Math.random() * 10) + 1);

// 퀴즈) Returns a random integer from 1 to 100:
// console.log(Math.ceil(Math.random() * 100));

// 퀴즈) Returns a random integer from 20 to 22:
console.log(Math.round(Math.random() + 20)); // 내 오답ㅎㅎ
console.log(Math.floor(Math.random() * 3) + 20); 



