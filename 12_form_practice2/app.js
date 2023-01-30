const express = require("express");
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'))
app.use(express.urlencoded({extend : true}))
app.use(express.json());

const id = 'banana'
const pw = '4321'

app.get('/', function(req, res){
  res.render('index');
})

app.get('/practice29', function(req, res){
  res.send(req.query)
})

app.post('/practice30', function (req, res){
  console.log(req.body);
  res.send(req.body);
})

app.listen(PORT, function(){
  console.log(`http://localhost:${PORT}`)
})