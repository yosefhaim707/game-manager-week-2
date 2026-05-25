function isValidScore(score) {
  return Number.isInteger(score) && score >= 0;
}

function calculateWinRate(wins, losses) {
  const totalGames = wins + losses;

  if (totalGames === 0) {
    return 0;
  }

  return (wins / totalGames) * 100;
}

function calculateAveragePoints(points, matchesPlayed) {
  if (matchesPlayed === 0) {
    return 0;
  }

  return points / matchesPlayed;
}

function formatScore(homeScore, awayScore) {
  return `${homeScore}-${awayScore}`;
}

module.exports = {
  isValidScore,
  calculateWinRate,
  calculateAveragePoints,
  formatScore
};
