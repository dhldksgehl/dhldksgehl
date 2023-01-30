const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(cookieParser()); // req.cookies 가능해짐

const cookieConfig = {
  httpOnly: true,
  maxAge: 60 * 1000,
  // 24 * 60 * 60 * 1000, // 24h ; 유효시간 (단위 : 밀리초)
}

// res.cookies()
app.get('/', (req, res) => {
  // req.cookies.popup
  // 쿠키 설정시: "hide"
  // 쿠키 미설정시 : ""
  res.render('index', {
    popup: req.cookies.popup
  });
});

app.post('/setCookie', (req, res) => {
  // 쿠키설정: popup 쿠키의 값을 설정
  res.cookie('popup', 'hide', cookieConfig);
  // 응답 : '쿠키 설정 성공!' 메세지를 응답으로 보냄
  res.render('쿠키 설정 성공')
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});