// Secret Word

var banana = `banana`;
var chisel = `chisel`;
var faucet = `faucet`;

var totalScore = 0; 
// Define round
var rounds = 'all gameplay until winning';
var previousResult = 0;


var rollDice = function () {
//determine max number here
  return Math.floor(Math.random() * 3) + 1;
};

// Define computer result.
var generateComputerResult = function () {
  var randomDiceNumber = rollDice();
  var computerPlays = "";
  if (randomDiceNumber == 1) {
    computerPlays = banana;
    return computerPlays;
  }
  if (randomDiceNumber == 2) {
    computerPlays = chisel;
    return computerPlays;
  }
  if (randomDiceNumber == 3) {
    computerPlays = faucet;
    return computerPlays;
  }
  return computerPlays;
};

var generateNumRoundsToWin = function (){
  return Math.floor(Math.random() * 2) + 2;
};

//main function
var main = function (input) {
  //Prevent caps errors
  input = input.toLowerCase();
  
  //declare result -> can't be global because we need it to change with every submit
  var computerPlays = generateComputerResult();
  console.log(`generateComputerResult, computerPlays: ${computerPlays}`);

  var numRoundsToWin = generateNumRoundsToWin (); 

//define total score
  if (input ==  computerPlays){
  totalScore = totalScore+1
  //to ensure that the user has to guess correctly twice in a row
  previousResult = previousResult+1;
  }

  if (input ==  computerPlays){
  totalScore = totalScore+1
  previousResult = previousResult-1;
  }

  var standardMessage = `Number of rounds to win: ${numRoundsToWin}. <br>
  Computer Plays: ${computerPlays}. <br> 
  Your guess/input: ${input}. <br> 
  Your score: ${totalScore} <br>
  previousResult : ${previousResult}`;
// Guesses to win : ${(1-totalScore)}

  console.log(`std message. Computer Plays: ${computerPlays}, input: ${input}`);

  var myOutputValue = `${standardMessage} <BR> you lost!`;

  if ((totalScore == 2 || totalScore >2) && previousResult > 1)
  {
  myOutputValue = `${standardMessage} <BR> you win!`;
  console.log("if statement", myOutputValue)
  };

  return myOutputValue;
};