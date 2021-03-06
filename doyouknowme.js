const chalk = require('chalk')
const log = console.log

log(chalk.bgMagenta("Welcome. Let us play a quiz today\n"))

var readlineSync = require("readline-sync")

var response = readlineSync.question(chalk.bold.white.bgBlue("Are you ready? (Yes/No) "))
console.log("\n")

if (response.toUpperCase() === "YES") {
    var userName = readlineSync.question(chalk.bgMagenta("What is your name? "))
    console.log("\n")
    log(chalk.bgBlue("Hi " + userName + ". Let the game begin!"))
    console.log("\n")

    score = 0;

    questions = [{
            question: "Where do I live? ",
            answer: "Delhi"
        },
        {
            question: "What is my age? ",
            answer: "20"
        },
        {
            question: "What is my favorite color? ",
            answer: "Orange"
        }, {
            question: "Do I like tea or coffee? ",
            answer: "Coffee"
        }, {
            question: "Which city is my college in? ",
            answer: "Delhi"
        },
        {
            question: "Do I like to read? ",
            answer: "Yes"
        }, {
            question: "Movies/Books? ",
            answer: "Books"
        }, {
            question: "Which is my birthday month? ",
            answer: "November"
        }
    ]

    function play(question, answer) {
        var userAnswer = readlineSync.question(question)
        if (userAnswer.toUpperCase() === answer.toUpperCase()) {
            score++
            log(chalk.green("You know this answer! " + "\n" + "Points: " + score))
            console.log("--------")
        } else {
            score--
            log(chalk.red("Oops! that is a wrong answer, " + userName + " " + "\n" + "Points: " + score))
            console.log("--------")
        }
    }
    for (i = 0; i < questions.length; i++) {
        play(questions[i].question, questions[i].answer)
    }
    log(chalk.bgMagenta("Thanks for playing. Your total score is " + score + "\n"))

    log(chalk.yellowBright("\nPrevious Top Scorers:\nAbhishek: 8\nNikita: 6\nKriti: 6\n"))


    highScores = [8, 6, 6]

    for (i = 0; i < highScores.length; i++) {
        if (score >= highScores[i]) {
            log(chalk.bold.black.bgGreen("Congrats. You are a top scorer. Please send a screenshot of your score!"))
            break
        }
    }


} else
    console.log("Thanks for coming.. Goodbye!")