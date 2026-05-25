const {
  isValidScore,
  calculateWinRate,
  calculateAveragePoints,
  formatScore
} = require("./scoreUtils.js");

console.log("CommonJS Test");
console.log("Is valid score:", isValidScore(12));
console.log("Win rate:", calculateWinRate(3, 1));
console.log("Average points:", calculateAveragePoints(30, 5));
console.log("Formatted score:", formatScore(12, 8));
