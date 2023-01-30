const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Routing (경로 설정)
app.get('/', function (req, res) {
  res.render('dynamic', {
    title: '동적 폼 실습'
  });
});

app.get('/practice29', function () {
  console.log(req.query) // { username:'aa' }
  res.send(req.query) // res.send{ username: 'aa' }
})

// db에서 가져왔다고 가정
const renlId = 'banana';
const realPw = '4321'

app.post('/practice', function (req, res) {
  console.log(req.body); // userId: 'aa' , userPw: '1234'


  if (realId === req.body.userId && realPw === req.body.userPw)


  res.send(req.body)
})

// 실습 30번 힌트
// app.post('/seanPost', (req, res) => {
//   console.log(req.body);
//   // req.body: 유저가 프론트에서 입력한 아이디/비번
//   // 진짜 아이디/비번 변수로 저장되어
//   // 유저가 입력한 아이디와 비번을 비교하는 로직
//   //....
//   res.send({ userInfo: req.body, msg: '오옹' });
// });

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});