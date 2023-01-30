const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.get('/', function(req, res){
  res.render('index')
})

app.get('/index26', function(req, res){
  res.render('index26')
})

app.get('/index27', function(req, res){
  res.render('index27')
})

app.get('/getForm', function(req, res){
  console.log(req.query);

  res.render('result', {
    title: 'Get 요청 성공',
    userInfo: req.query,
  })
})

app.post('/postForm', function(req, res){
  console.log(req.body);

  res.render('result', {
    title: 'POST 요청 성공',
    userInfo: req.body
  })
})

app.listen(PORT, function(){
  console.log(`http://localhost:${PORT}`);
})