// Question 1
let sum = function (a = 0, b = 0) {
  if (+a == +b) {
    return a * 6;
  }
  return a + b;
};
document.getElementById('question_1').innerHTML = sum(5, 5);
// Question 2
let compare = function (a = 0) {
  if (a > 19) {
    return (a - 19) * 3;
  }
  return (19 - a); 
};
document.getElementById('question_2').innerHTML = compare(20);
// Question 3, question 4
let divisibleByNumber = function(inp, num = 3) {
  let result = [], sum = 0;
  if (inp.length) {
    for (let i = 0; i < inp.length; i++) {
      if (inp[i] === "*") {
        continue;
      } 
      sum += +inp[i];
    }
    for (let i = 0; i <= 9; i++) {
      if ((sum + i) % num == 0) {
        result.push(inp.replace("*", i));
      }
    }
    if (num == 6) {
      for (let i = result.length - 1; i >= 0; i--) {
        let resultTemp = result[i];
        if(resultTemp.charAt(resultTemp.length - 1) % 2 != 0) {
          result.splice(i, 1);
        }
      }
    }
  }
  return result;
}
document.getElementById('question_3').innerHTML = divisibleByNumber("234*");
document.getElementById('question_4').innerHTML = divisibleByNumber("1234567890*", 6);
