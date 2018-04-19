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
