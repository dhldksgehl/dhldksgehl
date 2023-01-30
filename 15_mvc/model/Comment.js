// (임시) DB로부터 댓글 목록을 받아옴
// 배열 : 전체 댓글
// 각 객체 : 댓글 하나
exports.commentInfos = () => {
  return [{
      id: 1,
      userid: 'helloword',
      date: '2022-10-30',
      comment: '안녕하세요 ^^'
    },
    {
      id: 2,
      userid: 'happy',
      date: '2022-11-01',
      comment: '반가워요 ^^'
    },
    {
      id: 3,
      userid: 'lucky',
      date: '2022-11-02',
      comment: '오호 ^^'
    },
    {
      id: 4,
      userid: 'bestpart',
      date: '2022-11-02',
      comment: '첫댓 ^^'
    },
  ];
}