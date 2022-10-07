let no_1 = 1;
let no_2 = 2;
let no_3 = 3;

console.log('no_1 = ' + no_1)
console.log(`no_2 = ${no_2}`)
console.log(`no_3 = ${no_3}`)

function add(x, y, z){
  let result = x + y + z
  console.log(x+y+z);
  console.log(`no_1 + no_2 + no_3 = ${result}`)
alert(x+y+z);
}
add(no_1, no_2, no_3);

function sub(x, y){
  console.log(x-y);
  alert(x-y);
}
sub(no_1, no_2);

function divide(x, y){
  console.log(x/y);
  alert(x/y)
}
divide(no_1, no_2);

function mul(x, y){
  console.log(x*y);
  alert(x*y)
}
mul(no_1, no_2);