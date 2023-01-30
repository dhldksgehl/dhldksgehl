console.log('f')

function addNode() {
  // alert('버튼을 클릭하셨군요!');
  let div = document.getElementById('div1');
  // 요소 생성하기
  // createElement()
  let p = document.createElement('p'); // p 태그 성성 <p></p>
  p.innerText = '버튼을 눌러 만들어진 p태그';
  p.style.fonsWeight = '700'
  p.classList.add('append-p')
  // div.appendChild(p)
  // div.append('1번 추가')
  // div.append(p, '2번 추가')
  div.append(p);
}

function removeNode() {
  // alert('삭제 버튼 클릭!')
  let div = document.querySelector('#div1')
  let p = document.querySelector('#div1>p')

  // div.removeChild(p);
  p.remove(); // 위와같음
}


// 노드 생성/ 추가/ 삭제
// 1. 노드 생성
// createElement()

// 2. 노드 추가
// appendChild(): 노드 객체만 추가, 한 번에 한 개
// append(): 노드 객체 or 텍스트 추가, 한 번에 여러 개 가능

// 3. 노드 삭제
// 부모노드.removeChild(자식노드): 부모요소의 자식노드를 삭제
// 노드.remove(): "선택한 요소"를 삭제

// ----------------------------
let ul = document.querySelector('ul')
let li = document.createElement('li'); // <li></li>
li.innerText = '오렌지'; // <li>오렌지</li>

ul.append(li);


// -------------
let contaniner = document.querySelector('.container');
let img = document.createElement('img'); // <img>
img.setAttribute('src', './KakaoTalk_Photo_2022-10-04-10-01-38.png') // <img src="./image/puppy.jpg" >
img.setAttribute('alt', '강아지') // <img src="./image/puppy.jpg" alt="강아지" >
let title = document.createElement('div'); // <div></div>
title.innerText = '강아지입니다.' // <div>강아지입니다</div>

contaniner.append(img);
contaniner.append(title);