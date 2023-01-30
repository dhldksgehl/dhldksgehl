const express = require('express');
const app = express();
// socket은 express가 아닌 http 모듈에 연결해야 사용 가능
const http = require('http').Server(app);
const io = require('socket.io')(http); // http - socket 연결
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/view', express.static(__dirname + '/views'));

app.get('/', (req, res) => {
  res.render('chat');
});

// io.on
// : socket과 관련된 통신작업을 처리
io.on('connection', (socket) => {
  // "connention" event
  // : 클라이언트가 접속했을 때 발생, 콜백으로 socket 객체를 제공!

  console.log('******* Server Socket Connected >> ', socket.id)
  // socket.id : 소켓 고유 아이디 -> socket은 웹 페이지 별로 생김! ***

  // [실습 42]
  socket.on('hello', (data) => {
    // console.log('socket on hello >> ', data);
    console.log(`${data.who}: ${data.msg}`);
    socket.emit('hellokr', {who: 'hello', msg: '안녕~~~'});
  });

  socket.on('study', () => {
    socket.emit('studykr', {who : 'study', msg : '공부해~~~'});
  });

  socket.on('bye', () => {
    socket.emit('byekr', {who : 'bye', msg: '빠빠이~~~~'});
  });
})

// 주의!!!!) 소켓을 사용하기 위해서는 http.listen()으로 포트를 열어야함
http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});