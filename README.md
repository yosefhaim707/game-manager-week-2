# Game Tournament Manager One-Day Training Project

## Project Summary

`game-tournament-manager-one-day-training` is a Node.js training project that demonstrates a simple game tournament management system.

The project focuses on managing:

- Players
- Teams
- Matches
- Match results
- Player scores
- Team rankings
- Match history
- Game mode rules
- Tournament statistics
- ES Modules
- CommonJS modules
- Factory functions
- Classes
- Closures
- Array methods
- Object methods
- Validation logic

The main goal of the project is not to build a real esports platform, but to practice important JavaScript and Node.js concepts through a fun and realistic example.

The system runs from the terminal, creates sample players and teams, schedules matches, records results, updates rankings, calculates statistics, and prints the results to the console.

This project is designed to take **one full study day**.

It is a little simpler than the bank project because it does not include money transfers, overdraft rules, account closing, or complex transaction validation. Instead, it focuses on a cleaner tournament flow that is easier to complete in one day.

---

## Table of Contents

1. [Main Goal](#main-goal)
2. [What the Project Demonstrates](#what-the-project-demonstrates)
3. [Technologies Used](#technologies-used)
4. [Expected Duration](#expected-duration)
5. [Project Structure](#project-structure)
6. [How to Run the Project](#how-to-run-the-project)
7. [Application Flow](#application-flow)
8. [Core Data Models](#core-data-models)
9. [TournamentManager Class](#tournamentmanager-class)
10. [Game Modes and Rules](#game-modes-and-rules)
11. [Match Results](#match-results)
12. [Statistics System](#statistics-system)
13. [Printing Utilities](#printing-utilities)
14. [CommonJS Example](#commonjs-example)
15. [JavaScript Concepts Practiced](#javascript-concepts-practiced)
16. [Validation and Error Handling](#validation-and-error-handling)
17. [Example Scenario](#example-scenario)
18. [Current Limitations](#current-limitations)
19. [Possible Future Improvements](#possible-future-improvements)
20. [Final Notes](#final-notes)

---

## Main Goal

The goal of this project is to practice building a modular JavaScript application using Node.js.

The project simulates a small game tournament system where the code can:

- Create new players.
- Create teams.
- Add players to teams.
- Generate unique IDs for players, teams, and matches.
- Schedule matches between teams.
- Record match results.
- Prevent invalid results.
- Track match history.
- Search players by nickname.
- Filter teams by status.
- Calculate tournament statistics.
- Print readable output to the terminal.

This project is especially useful for learning how to organize code into modules and how to separate responsibilities between files.

---

## What the Project Demonstrates

The project demonstrates a complete flow of a small tournament system.

It includes:

- A main application file: `main.js`
- A central management class: `TournamentManager`
- Factory functions for creating clean data objects
- Utility functions for printing
- Utility functions for statistics
- A closure-based ID generator
- ES Module syntax using `import` and `export`
- A separate CommonJS example using `require` and `module.exports`

The project also shows how different files can work together:

- `main.js` controls the demo scenario.
- `TournamentManager.js` contains the main tournament logic.
- Factory files create players, teams, and matches.
- `stats.js` calculates useful tournament information.
- `printUtils.js` prints readable output.
- `commonjs` demonstrates CommonJS syntax separately.

---

## Technologies Used

This project uses:

- Node.js
- JavaScript
- ES Modules
- CommonJS
- npm scripts

There are no external npm dependencies in the suggested version of the project.

The project is mainly based on built-in JavaScript and Node.js features.

---

## Expected Duration

This project is designed for **one day** of practice.

Suggested timing:

| Part | Estimated Time |
|---|---:|
| Project setup and folder structure | 30 minutes |
| Factories and ID generator | 60 minutes |
| `TournamentManager` class | 2 hours |
| Statistics and printing utilities | 90 minutes |
| CommonJS example | 30 minutes |
| Demo scenario and validation testing | 90 minutes |
| Review and cleanup | 30 minutes |

Total estimated time: **7 hours**.

The project can be completed faster if students already understand modules, classes, and array methods.

---

## Project Structure

```txt
game-tournament-manager-one-day-training/
│
├── package.json
├── main.js
├── README.md
│
├── modules/
│   ├── idGenerator.js
│   ├── playerFactory.js
│   ├── teamFactory.js
│   ├── matchFactory.js
│   ├── TournamentManager.js
│   ├── stats.js
│   └── printUtils.js
│
└── commonjs/
    ├── package.json
    ├── scoreUtils.js
    └── testCommonJS.js
```

---

## File-by-File Explanation

### `package.json`

The root `package.json` defines the project as a Node.js package.

Important settings:

```json
{
  "main": "main.js",
  "scripts": {
    "start": "node main.js"
  },
  "type": "module"
}
```

The most important part is:

```json
"type": "module"
```

This means the root project uses ES Modules.

Because of this, the main project files use:

```js
import
export
```

instead of:

```js
require
module.exports
```

The project can be started with:

```bash
npm start
```

which runs:

```bash
node main.js
```

---

### `main.js`

`main.js` is the entry point of the application.

It imports:

- `createIdGenerator`
- `TournamentManager`
- Printing functions from `printUtils.js`

It creates three ID generators:

```js
const generatePlayerId = createIdGenerator("PLY");
const generateTeamId = createIdGenerator("TEAM");
const generateMatchId = createIdGenerator("MATCH");
```

These generators create IDs like:

```txt
PLY-1
PLY-2
TEAM-1
TEAM-2
MATCH-1
MATCH-2
```

Then it creates a new tournament manager:

```js
const tournament = new TournamentManager({
  generatePlayerId,
  generateTeamId,
  generateMatchId
});
```

After that, `main.js` runs a full tournament scenario:

1. Create players.
2. Create teams.
3. Add players to teams.
4. Print all teams.
5. Schedule matches.
6. Record match results.
7. Try to record an invalid result.
8. Search players by nickname.
9. Print match history.
10. Print leaderboard.
11. Print tournament statistics.
12. Print final tournament state.

This file is not interactive. It does not ask the user for input. Instead, it runs a predefined scenario to demonstrate how the system works.

---

### `modules/idGenerator.js`

This file exports the function:

```js
createIdGenerator(prefix = "ID")
```

The function uses a closure.

A closure means that an inner function remembers variables from the outer function, even after the outer function has finished running.

The file contains logic similar to:

```js
export function createIdGenerator(prefix = "ID") {
  let currentId = 0;

  return function generateId() {
    currentId += 1;
    return `${prefix}-${currentId}`;
  };
}
```

Example:

```js
const generatePlayerId = createIdGenerator("PLY");

generatePlayerId(); // PLY-1
generatePlayerId(); // PLY-2
generatePlayerId(); // PLY-3
```

Each generator has its own private `currentId`.

That means the player generator, team generator, and match generator do not interfere with each other.

This is one of the most important learning points in the project.

---

### `modules/playerFactory.js`

This file exports:

```js
createPlayer({ id, nickname, mainRole })
```

It creates a player object.

The player structure is:

```js
{
  id,
  nickname,
  mainRole,
  teamId: null,
  isActive: true,
  stats: {
    matchesPlayed: 0,
    totalPoints: 0
  }
}
```

The player nickname is cleaned with:

```js
nickname.trim()
```

That means if the input is:

```js
"  ShadowFox  "
```

the stored nickname becomes:

```txt
ShadowFox
```

This file demonstrates a factory function.

A factory function is a function that creates and returns an object.

---

### `modules/teamFactory.js`

This file exports:

```js
createTeam({ id, name, gameMode })
```

It creates a team object.

The team structure is:

```js
{
  id,
  name,
  gameMode,
  players: [],
  wins: 0,
  losses: 0,
  points: 0,
  isActive: true
}
```

Each team stores its own players in the `players` array.

This means the project has a simple hierarchy:

```txt
TournamentManager
└── teams
    └── team
        └── players
```

This is simpler than the bank project because there is no account transaction system inside every object.

---

### `modules/matchFactory.js`

This file exports:

```js
createMatch({
  id,
  homeTeamId,
  awayTeamId,
  gameMode
})
```

It creates a match object.

The match structure is:

```js
{
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
}
```

The match starts with:

```txt
Scheduled
```

After the result is recorded, the status becomes:

```txt
Completed
```

This gives students practice with object state changes.

---

### `modules/TournamentManager.js`

This is the main file of the system.

It exports the class:

```js
TournamentManager
```

The `TournamentManager` class manages the whole tournament state.

It stores:

```js
this.players = [];
this.teams = [];
this.matches = [];
```

The data hierarchy looks like this:

```txt
TournamentManager
├── players
├── teams
└── matches
```

The `TournamentManager` class receives the ID generators from `main.js`:

```js
constructor({
  generatePlayerId,
  generateTeamId,
  generateMatchId,
})
```

This is good design because `TournamentManager` does not need to know how IDs are generated. It only uses the generator functions it receives.

---

## TournamentManager Class

`TournamentManager` is the heart of the project.

It manages all players, teams, matches, results, rankings, and validation rules.

---

### Constructor

The constructor receives three generator functions:

```js
constructor({
  generatePlayerId,
  generateTeamId,
  generateMatchId,
})
```

Inside the constructor, the class creates:

```js
this.players = [];
this.teams = [];
this.matches = [];
```

and saves the generator functions:

```js
this.generatePlayerId = generatePlayerId;
this.generateTeamId = generateTeamId;
this.generateMatchId = generateMatchId;
```

It also defines the game mode rules.

---

### Main Methods

#### `isValidGameMode(gameMode)`

Checks if the game mode exists in the tournament rules.

Example valid game modes:

```txt
Solo
Duo
Squad
```

---

#### `isValidScore(score)`

Checks that a score is:

- A number
- Not `NaN`
- Greater than or equal to `0`
- A whole number

The logic is:

```js
Number.isInteger(score) && score >= 0
```

---

#### `createPlayer(nickname, mainRole)`

Creates a new player.

It validates:

- The nickname is not empty.
- The main role is not empty.
- The nickname is not already used.

If validation fails, the function returns:

```js
null
```

If creation succeeds, it returns the new player object.

Example:

```js
const player1 = tournament.createPlayer("ShadowFox", "Attacker");
```

---

#### `createTeam(name, gameMode)`

Creates a new team.

It validates:

- The team name is not empty.
- The game mode is valid.
- The team name is not already used.

If validation fails, the function returns:

```js
null
```

If creation succeeds, it returns the new team object.

Example:

```js
const team1 = tournament.createTeam("Pixel Warriors", "Squad");
```

---

#### `addPlayerToTeam(playerId, teamId)`

Adds a player to a team.

Validation:

- Player must exist.
- Team must exist.
- Player must be active.
- Team must be active.
- Player cannot already belong to another team.
- Team must not be full.

The team size is controlled by the game mode rules.

Example:

```js
tournament.addPlayerToTeam(player1.id, team1.id);
```

---

#### `scheduleMatch(homeTeamId, awayTeamId)`

Schedules a new match between two teams.

Validation:

- Home team must exist.
- Away team must exist.
- Teams cannot be the same team.
- Both teams must be active.
- Both teams must use the same game mode.
- Both teams must have enough players for that game mode.

If scheduling succeeds, a new match is created with status:

```txt
Scheduled
```

Example:

```js
const match1 = tournament.scheduleMatch(team1.id, team2.id);
```

---

#### `recordMatchResult(matchId, homeScore, awayScore)`

Records the result of a scheduled match.

Validation:

- Match must exist.
- Match must still be scheduled.
- Both scores must be valid.
- Scores cannot be equal.

This project does not allow draws because it keeps the ranking logic simpler for one day.

If the result succeeds:

- The match status becomes `Completed`.
- The scores are saved.
- The winner team gets one win.
- The loser team gets one loss.
- The winner team gets 3 points.
- Every player on both teams gets `matchesPlayed + 1`.
- Every player on the winning team gets bonus points.

Example:

```js
tournament.recordMatchResult(match1.id, 12, 8);
```

---

#### `findPlayerByNickname(searchText)`

Finds players by nickname.

The search:

- Trims the search text.
- Converts it to lowercase.
- Compares it with lowercase player nicknames.
- Uses `includes`.

This allows a search like:

```js
tournament.findPlayerByNickname("shadow")
```

to find:

```txt
ShadowFox
```

---

#### `findTeamById(teamId)`

Finds a team by ID.

Uses:

```js
Array.find()
```

---

#### `findPlayerById(playerId)`

Finds a player by ID.

Uses:

```js
Array.find()
```

---

#### `getActiveTeams()`

Returns all teams where:

```js
team.isActive === true
```

---

#### `getCompletedMatches()`

Returns all matches where:

```js
match.status === "Completed"
```

---

#### `getScheduledMatches()`

Returns all matches where:

```js
match.status === "Scheduled"
```

---

#### `getLeaderboard()`

Returns teams sorted by points.

The sort order is:

1. More points first.
2. More wins first.
3. Fewer losses first.

Example:

```js
return [...this.teams].sort((teamA, teamB) => teamB.points - teamA.points);
```

The spread operator is used so the original `teams` array is not changed directly.

---

#### `getTournamentStats()`

Returns full tournament statistics.

Internally, it uses:

```js
calculateTournamentStats({
  players: this.players,
  teams: this.teams,
  matches: this.matches
}, "allStats")
```

---

## Game Modes and Rules

The project supports three game modes:

| Game Mode | Players Per Team | Win Points |
|---|---:|---:|
| `Solo` | `1` | `3` |
| `Duo` | `2` | `3` |
| `Squad` | `3` | `3` |

---

### Solo Mode

A `Solo` team needs exactly one player.

This mode is useful for simple testing because each team has only one player.

---

### Duo Mode

A `Duo` team needs two players.

This mode is useful for practicing arrays because every team stores more than one player.

---

### Squad Mode

A `Squad` team needs three players.

This mode is the best mode for the main demo scenario because it feels like a real team competition but is still simple enough for one day.

---

## Match Results

Every scheduled match can become a completed match.

A match starts like this:

```js
{
  id: "MATCH-1",
  homeTeamId: "TEAM-1",
  awayTeamId: "TEAM-2",
  gameMode: "Squad",
  homeScore: null,
  awayScore: null,
  winnerTeamId: null,
  status: "Scheduled",
  createdAt: "2026-05-24T10:00:00.000Z",
  completedAt: null
}
```

After recording a result, it becomes:

```js
{
  id: "MATCH-1",
  homeTeamId: "TEAM-1",
  awayTeamId: "TEAM-2",
  gameMode: "Squad",
  homeScore: 12,
  awayScore: 8,
  winnerTeamId: "TEAM-1",
  status: "Completed",
  createdAt: "2026-05-24T10:00:00.000Z",
  completedAt: "2026-05-24T10:30:00.000Z"
}
```

This gives students practice with updating object properties after an action.

---

## Statistics System

The statistics logic is stored in:

```txt
modules/stats.js
```

The main function is:

```js
calculateTournamentStats(data, statType)
```

It receives:

```js
{
  players,
  teams,
  matches
}
```

It can return different results depending on `statType`.

Supported stat types include:

```txt
allPlayers
allTeams
allMatches
activePlayers
activeTeams
scheduledMatches
completedMatches
averageTeamPoints
topTeam
mostCommonGameMode
allStats
```

The function first creates useful collections:

```js
const activePlayers = players.filter(player => player.isActive);
const activeTeams = teams.filter(team => team.isActive);
const scheduledMatches = matches.filter(match => match.status === "Scheduled");
const completedMatches = matches.filter(match => match.status === "Completed");
```

It also calculates:

```js
averageTeamPoints
topTeam
mostCommonGameMode
```

---

### Available Statistics

#### `allPlayers`

Returns all players.

---

#### `allTeams`

Returns all teams.

---

#### `allMatches`

Returns all matches.

---

#### `activePlayers`

Returns all active players.

---

#### `activeTeams`

Returns all active teams.

---

#### `scheduledMatches`

Returns all scheduled matches.

---

#### `completedMatches`

Returns all completed matches.

---

#### `averageTeamPoints`

Returns the average number of points across all teams.

---

#### `topTeam`

Returns the team with the highest number of points.

---

#### `mostCommonGameMode`

Returns an object showing how many teams exist for each game mode.

Example:

```js
{
  Solo: 0,
  Duo: 0,
  Squad: 2
}
```

---

#### `allStats`

Returns a full statistics object:

```js
{
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
}
```

---

## Printing Utilities

The project keeps printing logic inside:

```txt
modules/printUtils.js
```

This makes the project cleaner because the business logic and terminal output are separated.

---

### `printTitle(title)`

Prints a section title with separator lines.

Used to make the terminal output easier to read.

---

### `printPlayers(players)`

Prints:

- Player nickname
- Player ID
- Main role
- Team ID
- Status
- Matches played
- Total points

---

### `printTeams(teams)`

Prints:

- Team name
- Team ID
- Game mode
- Status
- Number of players
- Wins
- Losses
- Points

---

### `printMatches(matches)`

Prints:

- Match ID
- Home team ID
- Away team ID
- Game mode
- Score
- Winner team ID
- Status
- Created date
- Completed date

If the match list is empty, it prints:

```txt
No matches found.
```

---

### `printLeaderboard(teams)`

Prints the teams sorted by ranking.

Example output:

```txt
1. Pixel Warriors - 6 points - 2 wins - 0 losses
2. Console Kings - 3 points - 1 win - 1 loss
3. Bug Hunters - 0 points - 0 wins - 2 losses
```

---

### `printAllTournamentStats(stats)`

Prints:

- Total players
- Total teams
- Total matches
- Scheduled matches
- Completed matches
- Average team points
- Top team
- Count of each game mode

---

## CommonJS Example

Although the main project uses ES Modules, the project also includes a CommonJS example.

The folder is:

```txt
commonjs/
```

It contains:

```txt
package.json
scoreUtils.js
testCommonJS.js
```

The `commonjs/package.json` file tells Node.js that files in this folder should use CommonJS:

```json
{
  "type": "commonjs"
}
```

---

### CommonJS Utilities

`scoreUtils.js` includes:

```js
isValidScore(score)
calculateWinRate(wins, losses)
calculateAveragePoints(points, matchesPlayed)
formatScore(homeScore, awayScore)
```

These are exported using:

```js
module.exports = {
  isValidScore,
  calculateWinRate,
  calculateAveragePoints,
  formatScore
};
```

This is different from ES Modules.

In ES Modules, the export would usually look like:

```js
export function isValidScore(score) {}
```

or:

```js
export {
  isValidScore,
  calculateWinRate
};
```

---

### CommonJS Test File

`testCommonJS.js` imports the utilities using:

```js
const {
  isValidScore,
  calculateWinRate,
  calculateAveragePoints,
  formatScore
} = require("./scoreUtils.js");
```

Then it runs a few test logs:

```js
console.log("CommonJS Test");
console.log("Is valid score:", isValidScore(12));
console.log("Win rate:", calculateWinRate(3, 1));
console.log("Average points:", calculateAveragePoints(30, 5));
console.log("Formatted score:", formatScore(12, 8));
```

This file is used to demonstrate how CommonJS works separately from the main ES Module project.

---

## How to Run the Project

### 1. Create the Project Folder

```bash
mkdir game-tournament-manager-one-day-training
cd game-tournament-manager-one-day-training
```

---

### 2. Create `package.json`

```bash
npm init -y
```

Then update it to include:

```json
{
  "main": "main.js",
  "scripts": {
    "start": "node main.js",
    "commonjs": "node commonjs/testCommonJS.js"
  },
  "type": "module"
}
```

---

### 3. Run the Main Project

```bash
npm start
```

or:

```bash
node main.js
```

---

### 4. Run the CommonJS Example

```bash
npm run commonjs
```

or:

```bash
node commonjs/testCommonJS.js
```

---

## Application Flow

The main app flow is controlled by `main.js`.

---

### Step 1: Import Required Modules

The application imports the ID generator, the tournament manager, and printing utilities.

```js
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
```

---

### Step 2: Create ID Generators

Three ID generators are created:

```js
const generatePlayerId = createIdGenerator("PLY");
const generateTeamId = createIdGenerator("TEAM");
const generateMatchId = createIdGenerator("MATCH");
```

Each one has its own counter.

---

### Step 3: Create the Tournament Manager

```js
const tournament = new TournamentManager({
  generatePlayerId,
  generateTeamId,
  generateMatchId
});
```

This creates the main object that controls the tournament system.

---

### Step 4: Create Players

The project creates six players:

```js
const player1 = tournament.createPlayer("ShadowFox", "Attacker");
const player2 = tournament.createPlayer("RocketBee", "Support");
const player3 = tournament.createPlayer("PixelNinja", "Defender");
const player4 = tournament.createPlayer("StormWolf", "Attacker");
const player5 = tournament.createPlayer("CyberCat", "Support");
const player6 = tournament.createPlayer("BugSlayer", "Defender");
```

---

### Step 5: Create Teams

The project creates two teams:

```js
const team1 = tournament.createTeam("Pixel Warriors", "Squad");
const team2 = tournament.createTeam("Console Kings", "Squad");
```

---

### Step 6: Add Players to Teams

Each team receives three players:

```js
tournament.addPlayerToTeam(player1.id, team1.id);
tournament.addPlayerToTeam(player2.id, team1.id);
tournament.addPlayerToTeam(player3.id, team1.id);

tournament.addPlayerToTeam(player4.id, team2.id);
tournament.addPlayerToTeam(player5.id, team2.id);
tournament.addPlayerToTeam(player6.id, team2.id);
```

---

### Step 7: Schedule Matches

The project schedules two matches:

```js
const match1 = tournament.scheduleMatch(team1.id, team2.id);
const match2 = tournament.scheduleMatch(team2.id, team1.id);
```

---

### Step 8: Record Match Results

The project records two match results:

```js
tournament.recordMatchResult(match1.id, 12, 8);
tournament.recordMatchResult(match2.id, 7, 10);
```

---

### Step 9: Try an Invalid Result

The project tries to record a result for a completed match again:

```js
tournament.recordMatchResult(match1.id, 5, 4);
```

This should fail because the match is already completed.

---

### Step 10: Search Player by Nickname

The project searches for players whose nickname includes `"shadow"`:

```js
const searchResults = tournament.findPlayerByNickname("shadow");
printPlayers(searchResults);
```

The search is case-insensitive.

---

### Step 11: Print Match History

The project prints all completed matches:

```js
printMatches(tournament.getCompletedMatches());
```

---

### Step 12: Print Leaderboard

The project prints the tournament leaderboard:

```js
printLeaderboard(tournament.getLeaderboard());
```

---

### Step 13: Print Tournament Statistics

The project calculates and prints full tournament statistics:

```js
const stats = tournament.getTournamentStats();
printAllTournamentStats(stats);
```

---

### Step 14: Print Final State

At the end, the project prints all players, teams, and matches again:

```js
printPlayers(tournament.getAllPlayers());
printTeams(tournament.getAllTeams());
printMatches(tournament.getAllMatches());
```

This shows how the data changed after all operations.

---

## Core Data Models

### Player Model

A player object looks like this:

```js
{
  id: "PLY-1",
  nickname: "ShadowFox",
  mainRole: "Attacker",
  teamId: "TEAM-1",
  isActive: true,
  stats: {
    matchesPlayed: 2,
    totalPoints: 20
  }
}
```

Fields:

| Field | Type | Meaning |
|---|---|---|
| `id` | string | Unique player ID |
| `nickname` | string | Player display name |
| `mainRole` | string | Main player role |
| `teamId` | string or null | ID of the team the player belongs to |
| `isActive` | boolean | Whether the player is active |
| `stats` | object | Player performance data |

---

### Team Model

A team object looks like this:

```js
{
  id: "TEAM-1",
  name: "Pixel Warriors",
  gameMode: "Squad",
  players: [],
  wins: 2,
  losses: 0,
  points: 6,
  isActive: true
}
```

Fields:

| Field | Type | Meaning |
|---|---|---|
| `id` | string | Unique team ID |
| `name` | string | Team name |
| `gameMode` | string | Team game mode |
| `players` | array | List of players in the team |
| `wins` | number | Number of wins |
| `losses` | number | Number of losses |
| `points` | number | Ranking points |
| `isActive` | boolean | Whether the team is active |

---

### Match Model

A match object looks like this:

```js
{
  id: "MATCH-1",
  homeTeamId: "TEAM-1",
  awayTeamId: "TEAM-2",
  gameMode: "Squad",
  homeScore: 12,
  awayScore: 8,
  winnerTeamId: "TEAM-1",
  status: "Completed",
  createdAt: "2026-05-24T10:00:00.000Z",
  completedAt: "2026-05-24T10:30:00.000Z"
}
```

Fields:

| Field | Type | Meaning |
|---|---|---|
| `id` | string | Unique match ID |
| `homeTeamId` | string | First team ID |
| `awayTeamId` | string | Second team ID |
| `gameMode` | string | Match game mode |
| `homeScore` | number or null | Home team score |
| `awayScore` | number or null | Away team score |
| `winnerTeamId` | string or null | Winning team ID |
| `status` | string | `Scheduled` or `Completed` |
| `createdAt` | string | ISO date string for creation |
| `completedAt` | string or null | ISO date string for completion |

---

## JavaScript Concepts Practiced

This project is useful because it practices many core JavaScript topics.

---

### Variables

The project uses variables to store:

- Players
- Teams
- Matches
- Search results
- Statistics
- Scores
- Game mode rules

Examples:

```js
const player1 = tournament.createPlayer(...);
const stats = tournament.getTournamentStats();
```

---

### Functions

The project uses many functions, including:

- Factory functions
- Utility functions
- Class methods
- Generator functions
- CommonJS functions

Examples:

```js
createPlayer();
createTeam();
createMatch();
calculateTournamentStats();
printTeams();
```

---

### Closures

The ID generator is the clearest closure example.

```js
export function createIdGenerator(prefix = "ID") {
  let currentId = 0;

  return function generateId() {
    currentId += 1;
    return `${prefix}-${currentId}`;
  };
}
```

The inner `generateId` function remembers `currentId`.

---

### Classes

The project uses a class for the main tournament logic:

```js
export class TournamentManager {
  // tournament logic here
}
```

This demonstrates object-oriented programming.

---

### Factory Functions

Factory functions are used for creating clean objects.

Examples:

```js
createPlayer();
createTeam();
createMatch();
```

This makes object creation more organized.

---

### Arrays

The project uses arrays for:

- Players
- Teams
- Matches

Important array methods used:

```js
find()
filter()
forEach()
map()
reduce()
sort()
```

---

### Objects

Objects are used for:

- Players
- Teams
- Matches
- Game mode rules
- Statistics

Example:

```js
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
```

---

### Object Methods

The project can use object methods such as:

```js
Object.keys()
Object.values()
Object.entries()
```

These are useful for printing game mode counts and statistics.

---

### String Methods

The project uses string methods like:

```js
trim()
toLowerCase()
includes()
```

These are used for cleaning names and searching players.

---

### Conditions

The project uses many `if` statements for validation.

Examples:

```js
if (!team) {
  console.log("Team not found.");
  return false;
}
```

---

### Switch Statement

The statistics file can use a `switch` statement to return different statistics based on `statType`.

---

### Modules

The project demonstrates two module systems.

Main project:

```js
import
export
```

CommonJS folder:

```js
require
module.exports
```

---

## Validation and Error Handling

The project includes basic validation to prevent invalid actions.

---

### Player Creation Validation

A player cannot be created if:

- The nickname is empty.
- The main role is empty.
- The nickname already exists.

---

### Team Creation Validation

A team cannot be created if:

- The team name is empty.
- The game mode is invalid.
- The team name already exists.

---

### Add Player to Team Validation

Adding a player to a team fails if:

- The player does not exist.
- The team does not exist.
- The player is inactive.
- The team is inactive.
- The player already belongs to a team.
- The team is already full.

---

### Schedule Match Validation

Scheduling a match fails if:

- One of the teams does not exist.
- The two team IDs are the same.
- One of the teams is inactive.
- The teams do not use the same game mode.
- One of the teams does not have enough players.

---

### Record Match Result Validation

Recording a result fails if:

- The match does not exist.
- The match is already completed.
- One of the scores is invalid.
- The scores are equal.

---

## Example Scenario

The demo scenario creates these players:

| Player | Role |
|---|---|
| ShadowFox | Attacker |
| RocketBee | Support |
| PixelNinja | Defender |
| StormWolf | Attacker |
| CyberCat | Support |
| BugSlayer | Defender |

Then the system creates these teams:

| Team | Game Mode |
|---|---|
| Pixel Warriors | Squad |
| Console Kings | Squad |

Then the system performs actions such as:

- Adding three players to Pixel Warriors.
- Adding three players to Console Kings.
- Scheduling two matches between the teams.
- Recording two valid results.
- Trying to record a result for a completed match.
- Searching for ShadowFox.
- Printing completed matches.
- Printing the leaderboard.
- Printing final tournament statistics.

This scenario helps test many parts of the system in one run.

---

## Current Limitations

This project is a training project, so it has some limitations.

### 1. No Database

All data is stored in memory.

When the program stops, all data is lost.

There is no database like:

- MongoDB
- MySQL
- PostgreSQL
- SQLite

---

### 2. No User Input

The project does not ask the user for input.

All actions are hardcoded inside `main.js`.

---

### 3. No API

The project does not expose an HTTP API.

There is no Express server.

---

### 4. No Frontend

The project does not have a web interface.

Everything is printed in the terminal.

---

### 5. No Authentication

There is no login system.

There are no user roles such as:

- Admin
- Player
- Coach

---

### 6. No Persistent Match Storage

Matches are stored only in memory.

---

### 7. No Unit Tests

The project currently demonstrates behavior through `main.js`, but it does not include a testing framework like:

- Jest
- Vitest
- Mocha

---

### 8. No Draws

The project does not support tied matches.

This keeps the ranking logic simple for a one-day project.

---

## Possible Future Improvements

The project can be improved in many ways.

---

### 1. Add Draw Support

A future version could allow matches to end in a draw.

Example points system:

```txt
Win: 3 points
Draw: 1 point
Loss: 0 points
```

---

### 2. Add Remove Player From Team

A future method could be:

```js
removePlayerFromTeam(playerId, teamId)
```

This would allow teams to change their roster.

---

### 3. Add Team Deactivation

A future method could be:

```js
deactivateTeam(teamId)
```

This would prevent inactive teams from playing new matches.

---

### 4. Add User Input

The project could become interactive by using:

- `readline`
- `inquirer`
- command-line arguments

This would allow the user to choose actions from a menu.

---

### 5. Add an Express API

The tournament logic could be exposed through REST endpoints.

Example routes:

```txt
GET /players
POST /players
GET /teams
POST /teams
POST /teams/:teamId/players
POST /matches
POST /matches/:matchId/result
GET /leaderboard
GET /stats
```

---

### 6. Add Unit Tests

Tests could be added for:

- Player creation
- Team creation
- Adding players to teams
- Scheduling matches
- Recording results
- Failed validations
- Leaderboard sorting
- Statistics
- ID generation

Example test framework:

```bash
npm install --save-dev vitest
```

---

### 7. Add Multiple Tournaments

A future version could support more than one tournament.

Example:

```js
createTournament("Winter Cup");
createTournament("Summer Cup");
```

---

### 8. Add Player Awards

The project could calculate awards such as:

- Most active player
- Best team
- Highest scoring player
- Rookie of the tournament

---

## Strengths of the Project

This project has several strong points:

- Clear separation between files.
- Good practice of ES Modules.
- Good use of factory functions.
- Good closure example with ID generation.
- Centralized tournament logic inside `TournamentManager`.
- Simple and understandable validation rules.
- Match history is stored clearly.
- Statistics are separated into their own module.
- Printing is separated into its own utility module.
- CommonJS is demonstrated separately.
- The project is fun and easy to understand.
- The scope is realistic for one day.

---

## Main Learning Value

The biggest learning value of this project is that it combines many JavaScript concepts into one understandable system.

Instead of practicing each topic separately, the project connects them together:

- Closures generate IDs.
- Factory functions create objects.
- A class manages tournament logic.
- Arrays store players, teams, and matches.
- Array methods search, filter, sort, and calculate data.
- Objects store rules and statistics.
- Modules separate code into files.
- Validation protects the system from invalid actions.
- Console printing shows the result of each action.

This makes the project a good first step toward building larger Node.js applications.

---

## Repository Link

Add the repository link after creating the project.

Suggested repository name:

```txt
game-tournament-manager-one-day-training
```

Suggested GitHub URL:

```txt
https://github.com/yosefhaim707/game-tournament-manager-one-day-training
```

---

## Final Notes

`game-tournament-manager-one-day-training` is a small but complete Node.js tournament simulation.

It is not meant to be a real esports platform, but it is a strong learning project because it shows how to organize logic, data, validation, statistics, and utility functions in a clean way.

The most important files are:

```txt
main.js
modules/TournamentManager.js
modules/idGenerator.js
modules/playerFactory.js
modules/teamFactory.js
modules/matchFactory.js
modules/stats.js
modules/printUtils.js
```

The main ideas to understand from this project are:

- How data flows from `main.js` into `TournamentManager`.
- How `TournamentManager` controls the system.
- How factory functions create clean objects.
- How match results update team rankings.
- How statistics are calculated from arrays.
- How closures can generate private counters.
- How ES Modules and CommonJS are different.

