const User = require('../model/User');

exports.main = (req, res) => {
  res.render('index', {
    title: '동적 폼 실습'
  });
};

exports.practice30 = (req, res) => {
  // console.log(req.body);
  // realId = User.getUserInfo().realId
  // realPw = User.getUserInfo().realPw
  // if(realId === req.body.userId && realPw === req.body.userPw){
  //   res.send({userInfo : req.body, isSuccess: true})
  // } else {
  //   res.send({ inSuccess: false});
  // }

  console.log(User.user);
  for (let i = 0; i < User.user.length; i++) {
    if (User.user[i].id == req.body.userId && User.user[i].pw == req.body.userPw) {
      return res.send({
        userInfo: User.user[i].name,
        isSuccess: true
      })
    }
  }
    res.send({ inSuccess: false});
}