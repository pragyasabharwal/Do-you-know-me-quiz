const chalk = require('chalk')
const log = console.log

console.log("Welcome. Let us play a quiz today\n")

var readlineSync = require("readline-sync")
var userName = readlineSync.question("What is you name?")