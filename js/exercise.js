// Question 1
let sum = function (a, b) {
  if (+a == +b) {
    return a * 6;
  }
  return a + b;
};
document.getElementById('question_1').innerHTML = sum(5, 5);
// Question 2
let compare = function (a) {
  if (a > 19) {
    return (a - 19) * 3;
  }
  return (19 - a); 
};
document.getElementById('question_2').innerHTML = compare(20);
// Question 3, question 4
let divisibleByNumber = function (inp, num) {
  let result = [], newArg;
  for (let i = 0; i <= 9; i++) {
    newArg = +inp.replace("*", i);
    if (+newArg % num == 0) {
      result.push(newArg);
    }
  }
  return result;
};
document.getElementById('question_3').innerHTML = divisibleByNumber("234*", 3);
document.getElementById('question_4').innerHTML = divisibleByNumber("1234567890*", 6);
