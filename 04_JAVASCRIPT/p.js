// 실습13.

for (var n = 2; n <= 9; n++) {
  console.log(`**** ${n}단****`)
  for (var i = 1; i <= 9; i++) {
    console.log(`${n} * ${i} = ${n * i}`)
  }
}


// console.log('**** 2단 ****');
// for (var n = 2; n <= 20; n = n + 2) {
//   console.log('2 * ' + n / 2 + ' = ' + n)
// }
// console.log('**** 3단 ****')
// for (var n = 3; n <= 30; n = n + 3) {
//   console.log('3 * ' + n / 3 + ' = ' + n)
// }
// console.log('**** 4단 ****')
// for (var n = 4; n <= 40; n = n + 4) {
//   console.log(`4 * ${n/4} = ${n}`)
// }
// console.log('**** 5단 ****')
// for (var n = 5; n <= 50; n = n + 5) {
//   console.log(`5 * ${n/5} = ${n}`)
// }
// console.log('**** 6단 ****')
// for (var n = 6; n <= 60; n = n + 6) {
//   console.log(`6 * ${n/6} = ${n}`)
// }
// console.log('**** 7단 ****')
// for (var n = 7; n <= 70; n = n + 7) {
//   console.log(`7 * ${n/7} = ${n}`)
// }
// console.log('**** 8단 ****')
// for (var n = 8; n <= 80; n = n + 8) {
//   console.log(`8 * ${n/8} = ${n}`)
// }
// console.log('**** 9단 ****')
// for (var n = 9; n <= 90; n = n + 9) {
//   console.log(`9 * ${n/9} = ${n}`)
// }





// 실습14.
var sum = 0;
for (var n = 0; n < 100; n++) {
  if (n % 2 === 0 || n % 3 === 0) { //2 or 3배수
    sum = sum + n
  }
}
console.log(`2또는 3의 배수의 총합은 ${sum} 입니다.`) // 3317



console.log(`1과 99까지 중에서 2 또는 3의 배수의 합: ${sum}`)