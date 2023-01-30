// document 요소 다루기 (읽고 쓰기)

// 1. HTML 요소 내용(content)을 읽고 쓰기
let div1 = document.getElementById('div1');
console.log(div1)

// innerHTML 속성
// : 요소 안의 "코드"를 가져오거나 수정
// => 입력된 문자열을 HTML 형식으로!
// 읽기 : 요소.innerHTML
// 쓰기 : 요소.innerHTML = 수정하려는 태그
console.log(div1.innerHTML); // 읽기
div1.innerHTML = '여기는 <b> 첫번째 <b> 태그입니다. &hearts;' // 쓰기(값을 수정)

// innerText 속성
// : 요소 안의 "텍스트"를 가져오거나 수정
// => 입력된 문자열을 그대로!!
// 읽기: 요소.innerText
// 쓰기: 요소.innerText = 수정하려는 텍스트
console.log(div1.innerText);
// div1.innerText = '여기는 <b>첫번째<b> 태그입니다. &hearts;'; // 쓰기
div1.innerText = '안녕하세요!!'; // 올바르게 사용

// textContent 속성
// : innerText와 마찬가지로 텍스트정보를 표시
// IE9 이전 버전에서는 사용 불가능
console.log(div1.textContent); // 읽기
div1.textContent = '안녕하세요2222'

// ---------------------------------------
// 2. 속성 접근
// 요소.속성명
let ch = document.getElementById('ch');
console.log(ch.id) // ch
console.log(ch.src) // 이미지 경로
console.log(ch.width) // 514
console.log(ch.alt) // 수정

let google = document.getElementById('google')
console.log(google);
console.log(google.href);

// getAttribute() : 속성값 가져오기
// setAttribute() : 속성값 설정하기
console.log(google.getAttribute('href'));
google.setAttribute('href','https://www.naver.com');
google.innerText = 'Naver';

// 연습
// 이미지 요소
// - 이미지 바꾸기
// - width/height 변경

console.log(document.getElementById('ch'));
console.log(ch.getAttribute('src'))
// console.log(ch.setAttribute('src','./quiz3.png'))

// ----------------------
// 3. 스타일(css) 제어
// : javascript로 css 설정 가능!

let h1 = document.querySelector('h1');

// 3-1. 인라인 스타일
console.log(h1);
console.log(h1.style);
console.log(h1.style.fontSize); //camelCase로 접근

h1.style.color = 'lightgreen';
h1.style.backgroundColor = 'skyblue'
h1.style.border = '4px solid brown'
h1.style.textShadow = '2px 2px 10px #f005';


let lis = document.querySelectorAll('li');
console.log(lis)


// 반복문을 이용해서 여러 요소 스타일을 한번에 설정
// for (let i=0; i<lis.length; i++){
//   console.log(lis[i])

//   lis[i].style.color = 'rgb(0, 100, 200)';
//   lis[i].style.fontSize = '20px';
//   lis[i].style.backgroundColor = '#ddd';
// }

// for ... of 반복문
// for (let 반복변수 of 배열) {}
// const mylists = ['a', 'b', 'c', 'd'];
// for(let list of mylists){
//   console.log(list)
// }

// for (let li of lis){
//   console.log(li);
//   li.style.color = 'rgb(0, 100, 200)'
// }

// 3-2. 클래스 제어 방식
// classList 속성
// - add(클래스명): 클래스 추가
// - remove(클래스명): 클래스 삭제
// - toggle(클래스명): 클래스 있으면 제거, 없으면 추가
// - contains(클래스명): 해당 클래스가 있는지 boolean 값으로 변경


console.log(h1);
console.log(h1.classList.add('h1'));
console.log(h1.classList);


// lis에 저장 되어있는 각각 li 요소에 접근해 .li 클래스 추가하기
// 반복문 사용하기

for(let i = 0; i<lis.length; i++){
  lis[i].classList.add('li')
}
console.log(lis)

// for ... of 반복문
for (let li of lis){
  li.classList.add('li');
}

// remove()
console.log(h1.classList);
h1.classList.remove('title');
console.log(h1.classList);

// toggle()
h1.classList.toggle('happy'); // 없어서 추가
h1.classList.toggle('happy'); // 있어서 제거

// contains() //=> 조건식으로 활용 (있으면 ~해라)
console.log(h1.classList.contains('h1')); // true
console.log(h1.classList.contains('lucky')); // false

// -------------------
// 계층 이동
// 부모, 자식, 형제
const apple = document.querySelector('li');
const fruits = document.querySelector('ul');
console.log(apple);
console.log(fruits);

// 1. 부모 노드 찾기
// 직속 부모는 하나
console.log(apple.parentElement); // ul
console.log(apple.parentElement.parentElement); // body

// 2. 자식 노드 찾기
// 자식 요소는 여러 개
console.log(fruits.children); // li => 배열형태X,
console.log(fruits.children[0]); // 0 번째 자식요소
console.log(fruits.children[1]); // 1 번째 자식요소
console.log(fruits.children[2]); // 2 번째 자식요소
console.log(fruits.children[3]); // 3 번째 자식요소
// 부모 -> 자식 -> 부모
console.log(fruits.children[0].parentElement)

// 3. 형제 노드
const lists = document.querySelectorAll('li');
console.log(lists); // li*4 => 배열형태
const listOrange = lists[2]; // 아래코드와 동일
// const listOrange = document.querySelectorAll('li')[2];
console.log(listOrange);
console.log(listOrange.previousElementSibling);
console.log(listOrange.nextElementSibling);

// 연습
const num = document.querySelector('ol');
console.log(num);
console.log(num.parentElement);
console.log(num.children[2].parentElement);
const three = document.querySelectorAll('ol>li');
console.log(three);
const three2 = three[1];
console.log(three2);
console.log(three2.previousElementSibling);
console.log(three2.nextElementSibling);

