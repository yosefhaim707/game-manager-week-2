export function createTeam({ id, name, gameMode }) {
  return {
    id,
    name: name.trim(),
    gameMode,
    players: [],
    wins: 0,
    losses: 0,
    points: 0,
    isActive: true
  };
}
