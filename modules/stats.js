export function calculateTournamentStats(data, statType = "allStats") {
  const players = data.players || [];
  const teams = data.teams || [];
  const matches = data.matches || [];

  const allPlayers = players;
  const allTeams = teams;
  const allMatches = matches;
  const activePlayers = players.filter(player => player.isActive);
  const activeTeams = teams.filter(team => team.isActive);
  const scheduledMatches = matches.filter(match => match.status === "Scheduled");
  const completedMatches = matches.filter(match => match.status === "Completed");

  const totalTeamPoints = teams.reduce((sum, team) => sum + team.points, 0);
  const averageTeamPoints = teams.length === 0 ? 0 : totalTeamPoints / teams.length;

  const topTeam = [...teams].sort((teamA, teamB) => {
    if (teamB.points !== teamA.points) {
      return teamB.points - teamA.points;
    }

    if (teamB.wins !== teamA.wins) {
      return teamB.wins - teamA.wins;
    }

    return teamA.losses - teamB.losses;
  })[0] || null;

  const mostCommonGameMode = {
    Solo: 0,
    Duo: 0,
    Squad: 0
  };

  teams.forEach(team => {
    if (mostCommonGameMode[team.gameMode] !== undefined) {
      mostCommonGameMode[team.gameMode] += 1;
    }
  });

  const allStats = {
    allPlayers,
    allTeams,
    allMatches,
    activePlayers,
    activeTeams,
    scheduledMatches,
    completedMatches,
    averageTeamPoints,
    topTeam,
    mostCommonGameMode
  };

  switch (statType) {
    case "allPlayers":
      return allPlayers;
    case "allTeams":
      return allTeams;
    case "allMatches":
      return allMatches;
    case "activePlayers":
      return activePlayers;
    case "activeTeams":
      return activeTeams;
    case "scheduledMatches":
      return scheduledMatches;
    case "completedMatches":
      return completedMatches;
    case "averageTeamPoints":
      return averageTeamPoints;
    case "topTeam":
      return topTeam;
    case "mostCommonGameMode":
      return mostCommonGameMode;
    case "allStats":
    default:
      return allStats;
  }
}
