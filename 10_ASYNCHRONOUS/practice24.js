// 실습24. Callback -> Promise

// Step1. callback 방식
// function changeBgColor(newColor, delay, callback) {
//   setTimeout(function () {
//     document.body.style.backgroundColor = newColor;
//     callback();
//   }, delay);
// }

// changeBgColor('red', 1000, function () {
//   changeBgColor('orange', 1000, function () {
//     changeBgColor('yellow', 1000, function () {
//       changeBgColor('green', 1000, function () {
//         changeBgColor('blue', 1000, function () {
//           console.log('END!');
//         });
//       });
//     });
//   });
// });

// Step2. callback -> promise
function changeBgColor(newColor) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.body.style.backgroundColor = newColor;
      resolve();
    }, 1000);
  });
}

changeBgColor('red')
  .then(function () {
    return changeBgColor('orange');
  })
  .then(function () {
    return changeBgColor('yellow');
  })
  .then(function () {
    return changeBgColor('green');
  })
  .then(function () {
    return changeBgColor('blue');
  });