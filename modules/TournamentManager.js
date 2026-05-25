import { createPlayer } from "./playerFactory.js";
import { createTeam } from "./teamFactory.js";
import { createMatch } from "./matchFactory.js";
import { calculateTournamentStats } from "./stats.js";

export class TournamentManager {
  constructor({ generatePlayerId, generateTeamId, generateMatchId }) {
    this.players = [];
    this.teams = [];
    this.matches = [];

    this.generatePlayerId = generatePlayerId;
    this.generateTeamId = generateTeamId;
    this.generateMatchId = generateMatchId;

    this.gameModeRules = {
      Solo: {
        playersPerTeam: 1,
        winPoints: 3
      },
      Duo: {
        playersPerTeam: 2,
        winPoints: 3
      },
      Squad: {
        playersPerTeam: 3,
        winPoints: 3
      }
    };
  }

  isValidGameMode(gameMode) {
    return Object.keys(this.gameModeRules).includes(gameMode);
  }

  isValidScore(score) {
    return Number.isInteger(score) && score >= 0;
  }

  createPlayer(nickname, mainRole) {
    const cleanNickname = String(nickname || "").trim();
    const cleanMainRole = String(mainRole || "").trim();

    if (cleanNickname === "") {
      console.log("Player nickname cannot be empty.");
      return null;
    }

    if (cleanMainRole === "") {
      console.log("Player main role cannot be empty.");
      return null;
    }

    const nicknameExists = this.players.some(player => {
      return player.nickname.toLowerCase() === cleanNickname.toLowerCase();
    });

    if (nicknameExists) {
      console.log(`Player nickname already exists: ${cleanNickname}`);
      return null;
    }

    const player = createPlayer({
      id: this.generatePlayerId(),
      nickname: cleanNickname,
      mainRole: cleanMainRole
    });

    this.players.push(player);
    return player;
  }

  createTeam(name, gameMode) {
    const cleanName = String(name || "").trim();

    if (cleanName === "") {
      console.log("Team name cannot be empty.");
      return null;
    }

    if (!this.isValidGameMode(gameMode)) {
      console.log(`Invalid game mode: ${gameMode}`);
      return null;
    }

    const nameExists = this.teams.some(team => {
      return team.name.toLowerCase() === cleanName.toLowerCase();
    });

    if (nameExists) {
      console.log(`Team name already exists: ${cleanName}`);
      return null;
    }

    const team = createTeam({
      id: this.generateTeamId(),
      name: cleanName,
      gameMode
    });

    this.teams.push(team);
    return team;
  }

  addPlayerToTeam(playerId, teamId) {
    const player = this.findPlayerById(playerId);
    const team = this.findTeamById(teamId);

    if (!player) {
      console.log("Player not found.");
      return false;
    }

    if (!team) {
      console.log("Team not found.");
      return false;
    }

    if (!player.isActive) {
      console.log("Player is not active.");
      return false;
    }

    if (!team.isActive) {
      console.log("Team is not active.");
      return false;
    }

    if (player.teamId !== null) {
      console.log(`${player.nickname} already belongs to a team.`);
      return false;
    }

    const rule = this.gameModeRules[team.gameMode];

    if (team.players.length >= rule.playersPerTeam) {
      console.log(`${team.name} is already full.`);
      return false;
    }

    player.teamId = team.id;
    team.players.push(player);
    return true;
  }

  scheduleMatch(homeTeamId, awayTeamId) {
    const homeTeam = this.findTeamById(homeTeamId);
    const awayTeam = this.findTeamById(awayTeamId);

    if (!homeTeam || !awayTeam) {
      console.log("Both teams must exist before scheduling a match.");
      return null;
    }

    if (homeTeam.id === awayTeam.id) {
      console.log("A team cannot play against itself.");
      return null;
    }

    if (!homeTeam.isActive || !awayTeam.isActive) {
      console.log("Both teams must be active.");
      return null;
    }

    if (homeTeam.gameMode !== awayTeam.gameMode) {
      console.log("Both teams must use the same game mode.");
      return null;
    }

    const rule = this.gameModeRules[homeTeam.gameMode];

    if (homeTeam.players.length < rule.playersPerTeam || awayTeam.players.length < rule.playersPerTeam) {
      console.log(`Both teams need ${rule.playersPerTeam} players for ${homeTeam.gameMode}.`);
      return null;
    }

    const match = createMatch({
      id: this.generateMatchId(),
      homeTeamId: homeTeam.id,
      awayTeamId: awayTeam.id,
      gameMode: homeTeam.gameMode
    });

    this.matches.push(match);
    return match;
  }

  recordMatchResult(matchId, homeScore, awayScore) {
    const match = this.matches.find(currentMatch => currentMatch.id === matchId);

    if (!match) {
      console.log("Match not found.");
      return false;
    }

    if (match.status !== "Scheduled") {
      console.log("Match result cannot be recorded because the match is already completed.");
      return false;
    }

    if (!this.isValidScore(homeScore) || !this.isValidScore(awayScore)) {
      console.log("Scores must be whole numbers greater than or equal to 0.");
      return false;
    }

    if (homeScore === awayScore) {
      console.log("Draws are not supported in this project.");
      return false;
    }

    const homeTeam = this.findTeamById(match.homeTeamId);
    const awayTeam = this.findTeamById(match.awayTeamId);
    const winnerTeam = homeScore > awayScore ? homeTeam : awayTeam;
    const loserTeam = homeScore > awayScore ? awayTeam : homeTeam;
    const rule = this.gameModeRules[match.gameMode];

    match.homeScore = homeScore;
    match.awayScore = awayScore;
    match.winnerTeamId = winnerTeam.id;
    match.status = "Completed";
    match.completedAt = new Date().toISOString();

    winnerTeam.wins += 1;
    winnerTeam.points += rule.winPoints;
    loserTeam.losses += 1;

    homeTeam.players.forEach(player => {
      player.stats.matchesPlayed += 1;
      player.stats.totalPoints += homeScore;
    });

    awayTeam.players.forEach(player => {
      player.stats.matchesPlayed += 1;
      player.stats.totalPoints += awayScore;
    });

    winnerTeam.players.forEach(player => {
      player.stats.totalPoints += rule.winPoints;
    });

    return true;
  }

  findPlayerByNickname(searchText) {
    const cleanSearchText = String(searchText || "").trim().toLowerCase();

    if (cleanSearchText === "") {
      return [];
    }

    return this.players.filter(player => {
      return player.nickname.toLowerCase().includes(cleanSearchText);
    });
  }

  findTeamById(teamId) {
    return this.teams.find(team => team.id === teamId);
  }

  findPlayerById(playerId) {
    return this.players.find(player => player.id === playerId);
  }

  getActiveTeams() {
    return this.teams.filter(team => team.isActive === true);
  }

  getCompletedMatches() {
    return this.matches.filter(match => match.status === "Completed");
  }

  getScheduledMatches() {
    return this.matches.filter(match => match.status === "Scheduled");
  }

  getLeaderboard() {
    return [...this.teams].sort((teamA, teamB) => {
      if (teamB.points !== teamA.points) {
        return teamB.points - teamA.points;
      }

      if (teamB.wins !== teamA.wins) {
        return teamB.wins - teamA.wins;
      }

      return teamA.losses - teamB.losses;
    });
  }

  getTournamentStats() {
    return calculateTournamentStats({
      players: this.players,
      teams: this.teams,
      matches: this.matches
    }, "allStats");
  }

  getAllPlayers() {
    return this.players;
  }

  getAllTeams() {
    return this.teams;
  }

  getAllMatches() {
    return this.matches;
  }
}
