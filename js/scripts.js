var add = function (number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number to add:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);

var subtruct = function (number1, number2) {
  return number1 - number2;
};

var number1 = parseInt(prompt("Enter a number to subruct:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = subtruct(number1, number2);
alert(result);

var multiply = function (number1, number2) {
  return number1 * number2;
};

var number1 = parseInt(prompt("Enter a number to multiply:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = multiply(number1, number2);
alert(result);

var division = function (number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number to divide:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = division(number1, number2);
alert(result);