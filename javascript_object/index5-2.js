// 이벤트 (EVENT)
// : 사용자들의 행동에 반응하는 작업
// ex. 클릭, 더블클릭, 폼 제출 등...

// 이벤트 리스터 (Event Listener)
// : 이벤트가 발생했을 떄 실행할 함수
// 1. 인라인 방식 => onxxx
// 2. onxx 속성 방식 => onxxx
// 3. addEventListener() 메소드 방식 => xxx

// 1. 인라인 방식
function showAlert(){
  alert('버튼1 클릭');
}

// 2. 속성(프로퍼티) 방식
let btn2 = document.querySelector('#btn2'); // <button>
btn2.onclick = function(){
  alert('버튼2 클릭');
}

// 3. addEventListener 메서드 방식
// addEventListener (type, listener)
// ㄴ type : 이벤트 종류 (클릭, 더블클릭 ...)
// ㄴ listener : 이벤트 발생시 처리할 함수
let btn3 = document.querySelector('#btn3'); // <button>
btn3.addEventListener('click', function() {
  alert('버튼3 클릭');
});

// mp
// let span = document.querySelectorAll('span')
// let span1 = span[0]
// let span2 = span[1]
// let span3 = span[2]

// span2.addEventListener('dblclick', function(){
//   alert('더블클릭');
// });

// span3.onclick() = function() {
//   alert('10시반~~')
// }
// function salert() {
//   alert('1번?')
// }


// 연습
// function clickspan1() {
//   let span1 = document.querySelector('#span1')
//   span1.style.color = 'blue'
// }

// let span2 = document.querySelector('#span2')
// span2.onclick = function () {
//   span2.style.backgroundColor = 'green'
// }

// let span3 = document.querySelector('#span3')
// span3.addEventListener('click', function(){
//   alert('span3 클릭')
// })


// mouseover 이벤트
// function mouseoverSpan1() {
//   let span1 = document.querySelector('#span1')
//   span1.style.color = 'blue'
// }

// let span2 = document.querySelector('#span2')
// span2.onmouseover = function () {
//   span2.style.backgroundColor = 'green'
// }

// let span3 = document.querySelector('#span3')
// span3.addEventListener('mouseover', function(){
//   alert('span3 클릭')
// })

// dblclick 이벤트
function dblSpan1() {
  let span1 = document.querySelector('#span1')
  span1.style.color = 'blue'
}

let span2 = document.querySelector('#span2')
span2.ondblclick = function () {
  span2.style.backgroundColor = 'green'
}

let span3 = document.querySelector('#span3')
span3.addEventListener('dblclick', function(){
  alert('span3 클릭')
})

// 실행되는 함수가 같을 때 , 한번 정리한 함수로 재사용
// function funcname(){
//   alert('반복될 내용')
// }

// span3.addEventListener('dblclick', funcname)
// span5674.addEventListener('dblclick', funcname)




