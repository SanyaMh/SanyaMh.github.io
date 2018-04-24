function guess() {
  number = prompt("I'm thinking of a number between 1-10, what is it?");
  var random = Math.random() * 9 + 1;
  if (number >= 10) {
    alert("Please chose a number from 1-10");
  }
  if (number <= 0) {
    alert("Please chose a number from 1-10")
  } else {
  alert("My number: " + parseInt(random) + " \nYour number: " + number);
  }
}
function eightball (){
  question = prompt ("Ask the magic eight computer a question");
  var answers=["Yes","No","Ask me later","Possibly","I don't know"];
  var result = Math.floor(Math.random()*answers.length);
  alert("Question: " + question + "\nAnswer: " + answers[result]);
}
function rps (){
  input = prompt ("Welcome to Rock, Paper, Scissors");
  var answers=["rock","paper","scissors"]
  var result = Math.floor(Math.random()*answers.length);
  var wl = "You Win!";


  if(answers == input){
    wl = "It's a tie!";
  }
    alert("You put " + input + "\nI put " + answers[result])
}
function banana (){
  var answers=["orange","passion fruit","apple","banana","watermelon","grape","strawberry","blueberry","raspberry","blackberry","mango","guava","papaya","pomegranate","dragon fruit"];
  var result = Math.floor(Math.random()*answers.length);
  alert(answers[result]);
}
