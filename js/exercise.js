// Question 1
var sum = function (a, b) {
  if (a === b) {
    return a * 3;
  }
  return a + b;
};
document.getElementById('question_1').innerHTML = sum(5, 5);
// Question 2
var compare = function (a) {
  if (a > 19) {
    return (a - 19) * 3;
  }
  return (19 - a); 
};
document.getElementById('question_2').innerHTML = compare(20);
// Question 3
let divisibleByThree = function (arg) {
  let result = [];
  for (let i = 0; i <= 9; i++) {
    let newArg = +arg.replace("*", i);
    if (+newArg % 3 == 0) {
      result.push('[' + newArg + ']');
    }
  }
  return result;
};
document.getElementById('question_3').innerHTML = divisibleByThree("234*");
// Question 4
let divisibleBySix = function (arg) {
  let result = [];
  for (let i = 0; i <= 9; i++) {
    let newArg = +arg.replace("*", i);
    if (+newArg % 6 == 0) {
      result.push('[' + newArg + ']');
    }
  }
  return result;
};
document.getElementById('question_4').innerHTML = divisibleBySix("*66");
