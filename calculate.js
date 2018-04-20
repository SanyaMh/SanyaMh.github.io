function add (){
  number1 = prompt("Addition Calculator: Enter the first number for me to calculate...","");
  number2 = prompt("Addition Calculator: Enter the second number for me to calculate...","");
  var result = parseInt(number1) + parseInt(number2);
  alert("I did my calculations and I got: " + result);
}
function multiply (){
  number1 = prompt("Multipilcation Calculator: Enter the first number for me to calculate...","");
  number2 = prompt("Multipilcation Calculator: Enter the second number for me to calculate...","");
  var result = parseInt(number1) * parseInt(number2);
  alert("I did my calculations and I got: " + result);
}
function divide (){
  number1 = prompt("Divison Calculator: Enter the first number for me to calculate...","");
  number2 = prompt("Divison Calculator: Enter the second number for me to calculate...","");
  var result = parseInt(number1) / parseInt(number2);
  alert("I did my calculations and I got: " + result);
}
function subtract (){
  number1 = prompt("Subtraction Calculator: Enter the first number for me to calculate...","");
  number2 = prompt("Subtraction Calculator: Enter the second number for me to calculate...","");
  var result = parseInt(number1) - parseInt(number2);
  alert("I did my calculations and I got: " + result);
}
function root (){
  number1 = prompt("Square Root Calculator: Enter a number for me to calculate the square root of...","");
  var result = Math.sqrt(parseInt(number1));
  alert("I did my calculations and I got: " + result);
}

function exponent (){
  number1 = prompt("Exponent Calculator: Enter the first number for me to calculate...","");
  var result = parseInt(number1) * parseInt(number1);
  alert("I did my calculations and I got: " + result);
}
function kilometer (){
kilometer = prompt ("Enter kilometers for me to convert")
var converter = 0.62;
  var result = kilometer * converter;
  alert(result);
}
function inches (){
  inches = prompt ("Enter inches for me to convert")
var converter = 2.54;
  var result = inches * converter;
alert(result);
}
