export function printTitle(title) {
  console.log("");
  console.log("=".repeat(60));
  console.log(title);
  console.log("=".repeat(60));
  console.log("");
}

function printDetails(title, details) {
  console.log(title);

  Object.entries(details).forEach(([label, value]) => {
    console.log(`  ${label}: ${value}`);
  });

  console.log("");
}

export function printPlayers(players) {
  if (players.length === 0) {
    console.log("No players found.");
    return;
  }

  players.forEach(player => {
    const teamId = player.teamId || "No team";
    const status = player.isActive ? "Active" : "Inactive";

    printDetails(player.nickname, {
      ID: player.id,
      Role: player.mainRole,
      Team: teamId,
      Status: status,
      Matches: player.stats.matchesPlayed,
      Points: player.stats.totalPoints
    });
  });
}

export function printTeams(teams) {
  if (teams.length === 0) {
    console.log("No teams found.");
    return;
  }

  teams.forEach(team => {
    const status = team.isActive ? "Active" : "Inactive";

    printDetails(team.name, {
      ID: team.id,
      Mode: team.gameMode,
      Status: status,
      Players: team.players.length,
      Wins: team.wins,
      Losses: team.losses,
      Points: team.points
    });
  });
}

export function printMatches(matches) {
  if (matches.length === 0) {
    console.log("No matches found.");
    return;
  }

  matches.forEach(match => {
    const score = match.homeScore === null ? "Not played yet" : `${match.homeScore}-${match.awayScore}`;
    const winner = match.winnerTeamId || "No winner yet";
    const completedAt = match.completedAt || "Not completed yet";

    printDetails(match.id, {
      "Home team": match.homeTeamId,
      "Away team": match.awayTeamId,
      Mode: match.gameMode,
      Score: score,
      Winner: winner,
      Status: match.status,
      Created: match.createdAt,
      Completed: completedAt
    });
  });
}

export function printLeaderboard(teams) {
  if (teams.length === 0) {
    console.log("No teams found.");
    return;
  }

  teams.forEach((team, index) => {
    const winText = team.wins === 1 ? "win" : "wins";
    const lossText = team.losses === 1 ? "loss" : "losses";

    printDetails(`${index + 1}. ${team.name}`, {
      Points: team.points,
      Wins: `${team.wins} ${winText}`,
      Losses: `${team.losses} ${lossText}`
    });
  });
}

export function printAllTournamentStats(stats) {
  printDetails("Summary", {
    "Total players": stats.allPlayers.length,
    "Total teams": stats.allTeams.length,
    "Total matches": stats.allMatches.length,
    "Scheduled matches": stats.scheduledMatches.length,
    "Completed matches": stats.completedMatches.length,
    "Average team points": stats.averageTeamPoints,
    "Top team": stats.topTeam ? stats.topTeam.name : "No teams yet"
  });

  console.log("Game modes:");

  Object.entries(stats.mostCommonGameMode).forEach(([gameMode, count]) => {
    console.log(`  ${gameMode}: ${count}`);
  });

  console.log("");
}
