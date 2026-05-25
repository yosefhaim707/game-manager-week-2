export function createMatch({ id, homeTeamId, awayTeamId, gameMode }) {
  return {
    id,
    homeTeamId,
    awayTeamId,
    gameMode,
    homeScore: null,
    awayScore: null,
    winnerTeamId: null,
    status: "Scheduled",
    createdAt: new Date().toISOString(),
    completedAt: null
  };
}
