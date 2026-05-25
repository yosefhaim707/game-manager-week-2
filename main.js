import { createIdGenerator } from "./modules/idGenerator.js";
import { TournamentManager } from "./modules/TournamentManager.js";
import {
  printTitle,
  printPlayers,
  printTeams,
  printMatches,
  printLeaderboard,
  printAllTournamentStats
} from "./modules/printUtils.js";

const generatePlayerId = createIdGenerator("PLY");
const generateTeamId = createIdGenerator("TEAM");
const generateMatchId = createIdGenerator("MATCH");

const tournament = new TournamentManager({
  generatePlayerId,
  generateTeamId,
  generateMatchId
});

printTitle("Create Players");
const player1 = tournament.createPlayer("ShadowFox", "Attacker");
const player2 = tournament.createPlayer("RocketBee", "Support");
const player3 = tournament.createPlayer("PixelNinja", "Defender");
const player4 = tournament.createPlayer("StormWolf", "Attacker");
const player5 = tournament.createPlayer("CyberCat", "Support");
const player6 = tournament.createPlayer("BugSlayer", "Defender");
printPlayers(tournament.getAllPlayers());

printTitle("Create Teams");
const team1 = tournament.createTeam("Pixel Warriors", "Squad");
const team2 = tournament.createTeam("Console Kings", "Squad");
printTeams(tournament.getAllTeams());

printTitle("Add Players To Teams");
tournament.addPlayerToTeam(player1.id, team1.id);
tournament.addPlayerToTeam(player2.id, team1.id);
tournament.addPlayerToTeam(player3.id, team1.id);
tournament.addPlayerToTeam(player4.id, team2.id);
tournament.addPlayerToTeam(player5.id, team2.id);
tournament.addPlayerToTeam(player6.id, team2.id);
printTeams(tournament.getAllTeams());

printTitle("Schedule Matches");
const match1 = tournament.scheduleMatch(team1.id, team2.id);
const match2 = tournament.scheduleMatch(team2.id, team1.id);
printMatches(tournament.getScheduledMatches());

printTitle("Record Match Results");
tournament.recordMatchResult(match1.id, 12, 8);
tournament.recordMatchResult(match2.id, 7, 10);
printMatches(tournament.getCompletedMatches());

printTitle("Try Invalid Result");
tournament.recordMatchResult(match1.id, 5, 4);

printTitle("Search Player By Nickname");
const searchResults = tournament.findPlayerByNickname("shadow");
printPlayers(searchResults);

printTitle("Completed Match History");
printMatches(tournament.getCompletedMatches());

printTitle("Leaderboard");
printLeaderboard(tournament.getLeaderboard());

printTitle("Tournament Stats");
const stats = tournament.getTournamentStats();
printAllTournamentStats(stats);

printTitle("Final Tournament State");
printPlayers(tournament.getAllPlayers());
printTeams(tournament.getAllTeams());
printMatches(tournament.getAllMatches());
