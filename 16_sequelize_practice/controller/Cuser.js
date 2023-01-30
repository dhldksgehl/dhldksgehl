// TODO: 컨트롤러 코드
// const User = require('../models/index');
const models = require('../models/')

exports.signup = (req, res) => {
  res.render('signup');
};

exports.post_signup = (req, res) => {
  // User.post_signup(req.body,(result) => {
  // res.send(result);
  // });
  console.log("Cuser: ", req.body);
  // const sql = `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}')`;
  models.User.create({
      userid: req.body.userid,
      pw: req.body.pw,
      name: req.body.name,
    })
    .then((result) => {
      console.log("res, result: ", result);
      res.send(result);
    })
};

exports.signin = (req, res) => {
  res.render('signin');
};

exports.post_signin = (req, res) => {
  // User.post_signin(req.body, (result) => {
  //   console.log('control: ', res);
  //   res.send(result);
  // });

  // const sql = `SELECT * FROM user WHERE userid='${data.userid}' and pw= '${data.pw}' LIMIT 1`;
  models.User.findOn({
    where: {
      userid: data.userid,
      name: data.name,
      pw: data.pw
    }
  }).then((result) => {
    if(result){
      res.send(true);
    } else {
      res.send(false)
    }
  })
};

exports.post_profile = (req, res) => {
  // User.post_profile(req.body.userid, (result) => {
  //   console.log();
  //   res.render('profile' ,{data: result[0]});
  // });

  // const sql = `SELECT * FROM user WHERE userid='${userid}' LIMIT 1`;
  models.User.findOne({
    where: {
      userid: req.body.userid
    }
  }).then((result) => {
    console.log(result); // [ {} ] -> {}
    res.render('profile', {
      data: result
    });
  });
};

exports.edit_profile = (req, res) => {
  // User.edit_profile(req.body);
  // console.log(req.body);

  // const sql = `UPDATE user SET userid='${data.userid}', name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
  models.User.update({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
    where: {
      id: req.body.id
    },
  }).then((result) => {
    res.send('회원정보 수정 성공!')
  })
};

exports.delete_profile = (req, res) => {
  // User.delete_profile(req.body.id);
  // console.log();
  // res.render('signin');

  // conn.query(`DELETE FROM user WHERE id='${id}'`, (err, rows) => {
  models.User.destroy({
    where: {
      id: req.body.id
    },
  }).then(() => {
    res.send('회원 탈퇴 완료!!')
  })
}