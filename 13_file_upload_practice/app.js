const express = require('express');
const app = express();
const PORT = 8000

const multer = require('multer');
const path = require('path');
const upload = multer({
  dest: 'uploads/',
});
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext)
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024
  },
})

app.use('/uploads', express.static(__dirname + '/uploads')); // upload

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use('upload', express.static(__dirname + '/uploads'));



app.get('/', function (req, res) {
  res.render('index', {
    title: '제목들어가랏'
  });
})

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`)
})



app.post('/result', uploadDetail.single('userfile'), function (req, res) {
  console.log(req.body);
  console.log(req.file);
  res.render('result', {
    userInfo: req.body,
    path: req.file.path,

  })
})