const chalk = require('chalk')
const log = console.log

log(chalk.bgMagenta("Welcome. Let us play a quiz today\n"))

var readlineSync = require("readline-sync")

var response = readlineSync.question(chalk.bold.white.bgBlue("Are you ready? (Yes/No) "))
console.log("\n")

if (response.toUpperCase() === YES) {
    var userName = readlineSync.question(chalk.bgMagenta("What is your name? "))
    console.log("\n")
    log(chalk.bgBlue("Hi " + userName + ". Let the game begin!"))
    console.log("\n")

    score = 0;

    questions =[
        {
            question:"Where do I live? ",
            answer: "Delhi"},
            {
            question:"What is my age? ",
            answer: "20"},
            {
            question:"What is my favorite color? ",
            answer: "Orange"
          },{
            question:"Do I like tea or coffee? ",
            answer: "Coffee"
          },{
            question:"Which city is my college in? ",
            answer:"Delhi"},
            {
            question:"Do I like to read? ",
            answer:"Yes"
          },{
            question:"Movies/Books? ",
            answer:"Books"},{
            question:"Which is my birthday month? ",
            answer:"November"}
    ]
    function play(question,answer)
{
  var userAnswer = readlineSync.question(question)
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
  score++
    log(chalk.green("You know this answer! " + "\n" + "Points: " + score))
    console.log("--------")
  }
  else
  { score--
    log(chalk.red("Oops! that is a wrong answer, " + userName +" " + "\n" + "Points: " + score))
  console.log("--------")
  }
}
}

