export function createPlayer({ id, nickname, mainRole }) {
  return {
    id,
    nickname: nickname.trim(),
    mainRole: mainRole.trim(),
    teamId: null,
    isActive: true,
    stats: {
      matchesPlayed: 0,
      totalPoints: 0
    }
  };
}
