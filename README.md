# פרויקט תרגול: מנהל טורניר משחקים

<a id="project-summary"></a>

## תקציר הפרויקט

`game-tournament-manager-one-day-training` הוא פרויקט תרגול ב-Node.js שמדגים מערכת פשוטה לניהול טורניר משחקים.

הפרויקט מתמקד בניהול:

- שחקנים
- קבוצות
- משחקים
- תוצאות משחקים
- ניקוד שחקנים
- דירוג קבוצות
- היסטוריית משחקים
- חוקי מצבי משחק
- סטטיסטיקות טורניר
- ES Modules
- CommonJS modules
- Factory functions
- Classes
- Closures
- Array methods
- Object methods
- לוגיקת ולידציה

המטרה המרכזית של הפרויקט היא לא לבנות פלטפורמת esports אמיתית, אלא לתרגל מושגים חשובים ב-JavaScript וב-Node.js דרך דוגמה מהנה וריאליסטית.

המערכת רצה מהטרמינל, יוצרת שחקנים וקבוצות לדוגמה, מתזמנת משחקים, מתעדת תוצאות, מעדכנת דירוגים, מחשבת סטטיסטיקות ומדפיסה את התוצאות לקונסול.

הוא מעט פשוט יותר מפרויקט הבנק, מכיוון שהוא לא כולל העברות כספים, חוקי מינוס, סגירת חשבונות או ולידציה מורכבת של פעולות. במקום זאת, הוא מתמקד בזרימת טורניר נקייה שקל יותר להשלים ביום אחד.

---

## תוכן עניינים

1. [המטרה המרכזית](#main-goal)
2. [מה הפרויקט מדגים](#what-the-project-demonstrates)
3. [טכנולוגיות בשימוש](#technologies-used)
4. [משך זמן צפוי](#expected-duration)
5. [מבנה הפרויקט](#project-structure)
6. [הסבר קובץ אחר קובץ](#file-by-file-explanation)
7. [מחלקת TournamentManager](#tournamentmanager-class)
8. [מצבי משחק וחוקים](#game-modes-and-rules)
9. [תוצאות משחקים](#match-results)
10. [מערכת הסטטיסטיקות](#statistics-system)
11. [כלי הדפסה](#printing-utilities)
12. [דוגמת CommonJS](#commonjs-example)
13. [איך להריץ את הפרויקט](#how-to-run-the-project)
14. [זרימת האפליקציה](#application-flow)
15. [מודלי הנתונים המרכזיים](#core-data-models)
16. [מושגי JavaScript שמתורגלים](#javascript-concepts-practiced)
17. [ולידציה וטיפול בשגיאות](#validation-and-error-handling)
18. [תרחיש לדוגמה](#example-scenario)
19. [מגבלות נוכחיות](#current-limitations)
20. [קישור לפרוייקט](#project-link)
21. [הרעיונות המרכזיים שחשוב להבין מהפרויקט](#final-notes)

---

<a id="main-goal"></a>

## המטרה המרכזית

המטרה של הפרויקט היא לתרגל בנייה של אפליקציית JavaScript מודולרית בעזרת Node.js.

הפרויקט מדמה מערכת קטנה לניהול טורניר משחקים, שבה הקוד יכול:

- ליצור שחקנים חדשים.
- ליצור קבוצות.
- להוסיף שחקנים לקבוצות.
- ליצור מזהים ייחודיים לשחקנים, לקבוצות ולמשחקים.
- לתזמן משחקים בין קבוצות.
- לתעד תוצאות משחקים.
- למנוע תוצאות לא תקינות.
- לעקוב אחרי היסטוריית משחקים.
- לחפש שחקנים לפי כינוי.
- לסנן קבוצות לפי סטטוס.
- לחשב סטטיסטיקות טורניר.
- להדפיס פלט קריא לטרמינל.

הפרויקט שימושי במיוחד ללמידה של ארגון קוד למודולים ושל הפרדת אחריות בין קבצים.

---

<a id="what-the-project-demonstrates"></a>

## מה הפרויקט מדגים

הפרויקט מדגים זרימה מלאה של מערכת טורניר קטנה.

הוא כולל:

- קובץ אפליקציה ראשי: `main.js`
- מחלקת ניהול מרכזית: `TournamentManager`
- Factory functions ליצירת אובייקטי נתונים נקיים
- פונקציות עזר להדפסה
- פונקציות עזר לסטטיסטיקות
- מחולל מזהים שמבוסס על closure
- תחביר ES Modules בעזרת `import` ו-`export`
- דוגמת CommonJS נפרדת בעזרת `require` ו-`module.exports`

הפרויקט גם מראה איך קבצים שונים יכולים לעבוד יחד:

- `main.js` שולט בתרחיש הדמו.
- `TournamentManager.js` מכיל את לוגיקת הטורניר המרכזית.
- קובצי factory יוצרים שחקנים, קבוצות ומשחקים.
- `stats.js` מחשב מידע שימושי על הטורניר.
- `printUtils.js` מדפיס פלט קריא.
- `commonjs` מדגים בנפרד תחביר CommonJS.

---

<a id="technologies-used"></a>

## טכנולוגיות בשימוש

הפרויקט משתמש ב:

- Node.js
- JavaScript
- ES Modules
- CommonJS
- npm scripts

בגרסה המוצעת של הפרויקט אין תלויות npm חיצוניות.

הפרויקט מבוסס בעיקר על יכולות מובנות של JavaScript ושל Node.js.

---

<a id="expected-duration"></a>

## משך זמן צפוי

הפרויקט מיועד ל**יום אחד** של תרגול.

זמן משוער כולל: **7 שעות**.

אפשר להשלים את הפרויקט מהר יותר אם התלמידים כבר מבינים מודולים, מחלקות ומתודות של מערכים.

---

<a id="project-structure"></a>

## מבנה הפרויקט

```txt
game-tournament-manager-one-day-training/
|
+-- package.json
+-- main.js
+-- README.md
|
+-- modules/
|   +-- idGenerator.js
|   +-- playerFactory.js
|   +-- teamFactory.js
|   +-- matchFactory.js
|   +-- TournamentManager.js
|   +-- stats.js
|   +-- printUtils.js
|
+-- commonjs/
    +-- package.json
    +-- scoreUtils.js
    +-- testCommonJS.js
```

---

<a id="file-by-file-explanation"></a>

## הסבר קובץ אחר קובץ

### `package.json`

קובץ ה-`package.json` הראשי מגדיר את הפרויקט כחבילת Node.js.

הגדרות חשובות:

```json
{
  "main": "main.js",
  "scripts": {
    "start": "node main.js"
  },
  "type": "module"
}
```

החלק החשוב ביותר הוא:

```json
"type": "module"
```

המשמעות היא שהפרויקט הראשי משתמש ב-ES Modules.

לכן קובצי הפרויקט הראשיים משתמשים ב:

```js
import
export
```

במקום:

```js
require;
module.exports;
```

אפשר להפעיל את הפרויקט עם:

```bash
npm start
```

שמריץ:

```bash
node main.js
```

---

### `main.js`

`main.js` הוא נקודת הכניסה של האפליקציה.

הוא מייבא:

- `createIdGenerator`
- `TournamentManager`
- פונקציות הדפסה מתוך `printUtils.js`

הוא יוצר שלושה מחוללי מזהים:

```js
const generatePlayerId = createIdGenerator("PLY");
const generateTeamId = createIdGenerator("TEAM");
const generateMatchId = createIdGenerator("MATCH");
```

המחוללים האלה יוצרים מזהים כמו:

```txt
PLY-1
PLY-2
TEAM-1
TEAM-2
MATCH-1
MATCH-2
```

לאחר מכן הוא יוצר מנהל טורניר חדש:

```js
const tournament = new TournamentManager({
  generatePlayerId,
  generateTeamId,
  generateMatchId,
});
```

אחרי זה, `main.js` מריץ תרחיש טורניר מלא:

1. יצירת שחקנים.
2. יצירת קבוצות.
3. הוספת שחקנים לקבוצות.
4. הדפסת כל הקבוצות.
5. תזמון משחקים.
6. תיעוד תוצאות משחקים.
7. ניסיון לתעד תוצאה לא תקינה.
8. חיפוש שחקנים לפי כינוי.
9. הדפסת היסטוריית משחקים.
10. הדפסת טבלת דירוג.
11. הדפסת סטטיסטיקות טורניר.
12. הדפסת מצב הטורניר הסופי.

הקובץ הזה אינו אינטראקטיבי. הוא לא מבקש קלט מהמשתמש. במקום זאת, הוא מריץ תרחיש מוגדר מראש כדי להדגים איך המערכת עובדת.

---

### `modules/idGenerator.js`

הקובץ הזה מייצא את הפונקציה:

```js
createIdGenerator((prefix = "ID"));
```

הפונקציה משתמשת ב-closure.

closure אומר שפונקציה פנימית זוכרת משתנים מהפונקציה החיצונית, גם אחרי שהפונקציה החיצונית סיימה לרוץ.

הקובץ מכיל לוגיקה דומה ל:

```js
export function createIdGenerator(prefix = "ID") {
  let currentId = 0;

  return function generateId() {
    currentId += 1;
    return `${prefix}-${currentId}`;
  };
}
```

דוגמה:

```js
const generatePlayerId = createIdGenerator("PLY");

generatePlayerId(); // PLY-1
generatePlayerId(); // PLY-2
generatePlayerId(); // PLY-3
```

לכל מחולל יש `currentId` פרטי משלו.

כלומר מחולל השחקנים, מחולל הקבוצות ומחולל המשחקים לא משפיעים זה על זה.

זו אחת מנקודות הלמידה החשובות ביותר בפרויקט.

---

### `modules/playerFactory.js`

הקובץ הזה מייצא:

```js
createPlayer({ id, nickname, mainRole });
```

הוא יוצר אובייקט שחקן.

מבנה השחקן הוא:

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

כינוי השחקן מנוקה בעזרת:

```js
nickname.trim();
```

כלומר אם הקלט הוא:

```js
"  ShadowFox  ";
```

הכינוי שנשמר יהיה:

```txt
ShadowFox
```

הקובץ הזה מדגים factory function.

factory function היא פונקציה שיוצרת ומחזירה אובייקט.

---

### `modules/teamFactory.js`

הקובץ הזה מייצא:

```js
createTeam({ id, name, gameMode });
```

הוא יוצר אובייקט קבוצה.

מבנה הקבוצה הוא:

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

כל קבוצה שומרת את השחקנים שלה בתוך מערך `players`.

כלומר לפרויקט יש היררכיה פשוטה:

```txt
TournamentManager
+-- teams
    +-- team
        +-- players
```

זה פשוט יותר מפרויקט הבנק, מכיוון שאין מערכת עסקאות חשבון בתוך כל אובייקט.

---

### `modules/matchFactory.js`

הקובץ הזה מייצא:

```js
createMatch({
  id,
  homeTeamId,
  awayTeamId,
  gameMode,
});
```

הוא יוצר אובייקט משחק.

מבנה המשחק הוא:

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

המשחק מתחיל עם:

```txt
Scheduled
```

לאחר שתוצאה מתועדת, הסטטוס הופך ל:

```txt
Completed
```

כך התלמידים מתרגלים שינוי מצב של אובייקטים.

---

### `modules/TournamentManager.js`

זה הקובץ המרכזי של המערכת.

הוא מייצא את המחלקה:

```js
TournamentManager;
```

מחלקת `TournamentManager` מנהלת את כל מצב הטורניר.

היא שומרת:

```js
this.players = [];
this.teams = [];
this.matches = [];
```

היררכיית הנתונים נראית כך:

```txt
TournamentManager
+-- players
+-- teams
+-- matches
```

מחלקת `TournamentManager` מקבלת את מחוללי המזהים מ-`main.js`:

```js
constructor({
  generatePlayerId,
  generateTeamId,
  generateMatchId,
});
```

זה עיצוב טוב, כי `TournamentManager` לא צריך לדעת איך מזהים נוצרים. הוא רק משתמש בפונקציות המחוללות שהוא מקבל.

---

<a id="tournamentmanager-class"></a>

## מחלקת TournamentManager

`TournamentManager` היא הלב של הפרויקט.

היא מנהלת את כל השחקנים, הקבוצות, המשחקים, התוצאות, הדירוגים וחוקי הוולידציה.

---

### Constructor

ה-constructor מקבל שלוש פונקציות מחוללות:

```js
constructor({
  generatePlayerId,
  generateTeamId,
  generateMatchId,
});
```

בתוך ה-constructor, המחלקה יוצרת:

```js
this.players = [];
this.teams = [];
this.matches = [];
```

ושומרת את הפונקציות המחוללות:

```js
this.generatePlayerId = generatePlayerId;
this.generateTeamId = generateTeamId;
this.generateMatchId = generateMatchId;
```

היא גם מגדירה את חוקי מצבי המשחק.

---

### מתודות מרכזיות

#### `isValidGameMode(gameMode)`

בודקת אם מצב המשחק קיים בחוקי הטורניר.

דוגמאות למצבי משחק תקינים:

```txt
Solo
Duo
Squad
```

---

#### `isValidScore(score)`

בודקת שהניקוד הוא:

- מספר
- לא `NaN`
- גדול או שווה ל-`0`
- מספר שלם

הלוגיקה היא:

```js
Number.isInteger(score) && score >= 0;
```

---

#### `createPlayer(nickname, mainRole)`

יוצרת שחקן חדש.

היא בודקת:

- הכינוי לא ריק.
- התפקיד המרכזי לא ריק.
- הכינוי עדיין לא נמצא בשימוש.

אם הוולידציה נכשלת, הפונקציה מחזירה:

```js
null;
```

אם היצירה מצליחה, היא מחזירה את אובייקט השחקן החדש.

דוגמה:

```js
const player1 = tournament.createPlayer("ShadowFox", "Attacker");
```

---

#### `createTeam(name, gameMode)`

יוצרת קבוצה חדשה.

היא בודקת:

- שם הקבוצה לא ריק.
- מצב המשחק תקין.
- שם הקבוצה עדיין לא נמצא בשימוש.

אם הוולידציה נכשלת, הפונקציה מחזירה:

```js
null;
```

אם היצירה מצליחה, היא מחזירה את אובייקט הקבוצה החדש.

דוגמה:

```js
const team1 = tournament.createTeam("Pixel Warriors", "Squad");
```

---

#### `addPlayerToTeam(playerId, teamId)`

מוסיפה שחקן לקבוצה.

ולידציה:

- השחקן חייב להתקיים.
- הקבוצה חייבת להתקיים.
- השחקן חייב להיות פעיל.
- הקבוצה חייבת להיות פעילה.
- השחקן לא יכול כבר להשתייך לקבוצה אחרת.
- הקבוצה לא יכולה להיות מלאה.

גודל הקבוצה נשלט על ידי חוקי מצב המשחק.

דוגמה:

```js
tournament.addPlayerToTeam(player1.id, team1.id);
```

---

#### `scheduleMatch(homeTeamId, awayTeamId)`

מתזמנת משחק חדש בין שתי קבוצות.

ולידציה:

- קבוצת הבית חייבת להתקיים.
- קבוצת החוץ חייבת להתקיים.
- הקבוצות לא יכולות להיות אותה קבוצה.
- שתי הקבוצות חייבות להיות פעילות.
- שתי הקבוצות חייבות להשתמש באותו מצב משחק.
- לשתי הקבוצות חייבים להיות מספיק שחקנים עבור מצב המשחק הזה.

אם התזמון מצליח, נוצר משחק חדש עם סטטוס:

```txt
Scheduled
```

דוגמה:

```js
const match1 = tournament.scheduleMatch(team1.id, team2.id);
```

---

#### `recordMatchResult(matchId, homeScore, awayScore)`

מתעדת תוצאה של משחק מתוזמן.

ולידציה:

- המשחק חייב להתקיים.
- המשחק עדיין חייב להיות מתוזמן.
- שני הניקודים חייבים להיות תקינים.
- הניקודים לא יכולים להיות שווים.

הפרויקט לא מאפשר תיקו, כי כך לוגיקת הדירוג נשארת פשוטה יותר לפרויקט של יום אחד.

אם התוצאה נרשמת בהצלחה:

- סטטוס המשחק הופך ל-`Completed`.
- הניקודים נשמרים.
- הקבוצה המנצחת מקבלת ניצחון אחד.
- הקבוצה המפסידה מקבלת הפסד אחד.
- הקבוצה המנצחת מקבלת 3 נקודות.
- כל שחקן בשתי הקבוצות מקבל `matchesPlayed + 1`.
- כל שחקן בקבוצה המנצחת מקבל נקודות בונוס.

דוגמה:

```js
tournament.recordMatchResult(match1.id, 12, 8);
```

---

#### `findPlayerByNickname(searchText)`

מוצאת שחקנים לפי כינוי.

החיפוש:

- מנקה רווחים מהטקסט.
- ממיר אותו לאותיות קטנות.
- משווה אותו לכינויי השחקנים באותיות קטנות.
- משתמש ב-`includes`.

כך חיפוש כמו:

```js
tournament.findPlayerByNickname("shadow");
```

ימצא:

```txt
ShadowFox
```

---

#### `findTeamById(teamId)`

מוצאת קבוצה לפי ID.

משתמשת ב:

```js
Array.find();
```

---

#### `findPlayerById(playerId)`

מוצאת שחקן לפי ID.

משתמשת ב:

```js
Array.find();
```

---

#### `getActiveTeams()`

מחזירה את כל הקבוצות שבהן:

```js
team.isActive === true;
```

---

#### `getCompletedMatches()`

מחזירה את כל המשחקים שבהם:

```js
match.status === "Completed";
```

---

#### `getScheduledMatches()`

מחזירה את כל המשחקים שבהם:

```js
match.status === "Scheduled";
```

---

#### `getLeaderboard()`

מחזירה קבוצות שממוינות לפי נקודות.

סדר המיון הוא:

1. יותר נקודות קודם.
2. יותר ניצחונות קודם.
3. פחות הפסדים קודם.

דוגמה:

```js
return [...this.teams].sort((teamA, teamB) => teamB.points - teamA.points);
```

משתמשים ב-spread operator כדי שהמערך המקורי `teams` לא ישתנה ישירות.

---

#### `getTournamentStats()`

מחזירה סטטיסטיקות מלאות של הטורניר.

בפנים היא משתמשת ב:

```js
calculateTournamentStats(
  {
    players: this.players,
    teams: this.teams,
    matches: this.matches,
  },
  "allStats",
);
```

---

<a id="game-modes-and-rules"></a>

## מצבי משחק וחוקים

הפרויקט תומך בשלושה מצבי משחק:

| מצב משחק | שחקנים בכל קבוצה | נקודות על ניצחון |
| -------- | ---------------: | ---------------: |
| `Solo`   |              `1` |              `3` |
| `Duo`    |              `2` |              `3` |
| `Squad`  |              `3` |              `3` |

---

### מצב Solo

קבוצת `Solo` צריכה בדיוק שחקן אחד.

המצב הזה שימושי לבדיקות פשוטות, כי בכל קבוצה יש רק שחקן אחד.

---

### מצב Duo

קבוצת `Duo` צריכה שני שחקנים.

המצב הזה שימושי לתרגול מערכים, כי כל קבוצה שומרת יותר משחקן אחד.

---

### מצב Squad

קבוצת `Squad` צריכה שלושה שחקנים.

זה מצב המשחק הטוב ביותר לתרחיש הדמו המרכזי, כי הוא מרגיש כמו תחרות קבוצתית אמיתית ועדיין פשוט מספיק ליום אחד.

---

<a id="match-results"></a>

## תוצאות משחקים

כל משחק מתוזמן יכול להפוך למשחק שהושלם.

משחק מתחיל כך:

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

אחרי תיעוד תוצאה, הוא הופך ל:

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

כך התלמידים מתרגלים עדכון מאפיינים של אובייקט אחרי פעולה.

---

<a id="statistics-system"></a>

## מערכת הסטטיסטיקות

לוגיקת הסטטיסטיקות נמצאת ב:

```txt
modules/stats.js
```

הפונקציה המרכזית היא:

```js
calculateTournamentStats(data, statType);
```

היא מקבלת:

```js
{
  (players, teams, matches);
}
```

היא יכולה להחזיר תוצאות שונות בהתאם ל-`statType`.

סוגי הסטטיסטיקות הנתמכים כוללים:

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

הפונקציה יוצרת קודם אוספים שימושיים:

```js
const activePlayers = players.filter((player) => player.isActive);
const activeTeams = teams.filter((team) => team.isActive);
const scheduledMatches = matches.filter(
  (match) => match.status === "Scheduled",
);
const completedMatches = matches.filter(
  (match) => match.status === "Completed",
);
```

היא גם מחשבת:

```js
averageTeamPoints;
topTeam;
mostCommonGameMode;
```

---

### סטטיסטיקות זמינות

#### `allPlayers`

מחזירה את כל השחקנים.

---

#### `allTeams`

מחזירה את כל הקבוצות.

---

#### `allMatches`

מחזירה את כל המשחקים.

---

#### `activePlayers`

מחזירה את כל השחקנים הפעילים.

---

#### `activeTeams`

מחזירה את כל הקבוצות הפעילות.

---

#### `scheduledMatches`

מחזירה את כל המשחקים המתוזמנים.

---

#### `completedMatches`

מחזירה את כל המשחקים שהושלמו.

---

#### `averageTeamPoints`

מחזירה את ממוצע הנקודות של כל הקבוצות.

---

#### `topTeam`

מחזירה את הקבוצה עם מספר הנקודות הגבוה ביותר.

---

#### `mostCommonGameMode`

מחזירה אובייקט שמראה כמה קבוצות קיימות לכל מצב משחק.

דוגמה:

```js
{
  Solo: 0,
  Duo: 0,
  Squad: 2
}
```

---

#### `allStats`

מחזירה אובייקט סטטיסטיקות מלא:

```js
{
  (allPlayers,
    allTeams,
    allMatches,
    activePlayers,
    activeTeams,
    scheduledMatches,
    completedMatches,
    averageTeamPoints,
    topTeam,
    mostCommonGameMode);
}
```

---

<a id="printing-utilities"></a>

## כלי הדפסה

הפרויקט שומר את לוגיקת ההדפסה בתוך:

```txt
modules/printUtils.js
```

כך הפרויקט נקי יותר, כי הלוגיקה העסקית והפלט לטרמינל מופרדים.

---

### `printTitle(title)`

מדפיסה כותרת מקטע עם שורות הפרדה.

משמשת כדי להפוך את פלט הטרמינל לקריא יותר.

---

### `printPlayers(players)`

מדפיסה:

- כינוי שחקן
- ID שחקן
- תפקיד מרכזי
- ID קבוצה
- סטטוס
- מספר משחקים ששוחקו
- סך נקודות

---

### `printTeams(teams)`

מדפיסה:

- שם קבוצה
- ID קבוצה
- מצב משחק
- סטטוס
- מספר שחקנים
- ניצחונות
- הפסדים
- נקודות

---

### `printMatches(matches)`

מדפיסה:

- ID משחק
- ID קבוצת בית
- ID קבוצת חוץ
- מצב משחק
- תוצאה
- ID הקבוצה המנצחת
- סטטוס
- תאריך יצירה
- תאריך השלמה

אם רשימת המשחקים ריקה, היא מדפיסה:

```txt
No matches found.
```

---

### `printLeaderboard(teams)`

מדפיסה את הקבוצות לפי סדר הדירוג.

פלט לדוגמה:

```txt
1. Pixel Warriors - 6 points - 2 wins - 0 losses
2. Console Kings - 3 points - 1 win - 1 loss
3. Bug Hunters - 0 points - 0 wins - 2 losses
```

---

### `printAllTournamentStats(stats)`

מדפיסה:

- סך כל השחקנים
- סך כל הקבוצות
- סך כל המשחקים
- משחקים מתוזמנים
- משחקים שהושלמו
- ממוצע נקודות לקבוצה
- הקבוצה המובילה
- כמות מכל מצב משחק

---

<a id="commonjs-example"></a>

## דוגמת CommonJS

למרות שהפרויקט הראשי משתמש ב-ES Modules, הפרויקט כולל גם דוגמת CommonJS.

התיקייה היא:

```txt
commonjs/
```

היא מכילה:

```txt
package.json
scoreUtils.js
testCommonJS.js
```

קובץ `commonjs/package.json` אומר ל-Node.js שהקבצים בתיקייה הזאת צריכים להשתמש ב-CommonJS:

```json
{
  "type": "commonjs"
}
```

---

### כלי CommonJS

`scoreUtils.js` כולל:

```js
isValidScore(score);
calculateWinRate(wins, losses);
calculateAveragePoints(points, matchesPlayed);
formatScore(homeScore, awayScore);
```

הפונקציות האלה מיוצאות בעזרת:

```js
module.exports = {
  isValidScore,
  calculateWinRate,
  calculateAveragePoints,
  formatScore,
};
```

זה שונה מ-ES Modules.

ב-ES Modules, הייצוא בדרך כלל ייראה כך:

```js
export function isValidScore(score) {}
```

או:

```js
export { isValidScore, calculateWinRate };
```

---

### קובץ בדיקת CommonJS

`testCommonJS.js` מייבא את כלי העזר בעזרת:

```js
const {
  isValidScore,
  calculateWinRate,
  calculateAveragePoints,
  formatScore,
} = require("./scoreUtils.js");
```

לאחר מכן הוא מריץ כמה הדפסות בדיקה:

```js
console.log("CommonJS Test");
console.log("Is valid score:", isValidScore(12));
console.log("Win rate:", calculateWinRate(3, 1));
console.log("Average points:", calculateAveragePoints(30, 5));
console.log("Formatted score:", formatScore(12, 8));
```

הקובץ הזה משמש להדגמה של אופן העבודה של CommonJS בנפרד מפרויקט ה-ES Module הראשי.

---

<a id="how-to-run-the-project"></a>

## איך להריץ את הפרויקט

### 1. יצירת תיקיית הפרויקט

```bash
mkdir game-tournament-manager-one-day-training
cd game-tournament-manager-one-day-training
```

---

### 2. יצירת `package.json`

```bash
npm init -y
```

לאחר מכן עדכנו אותו כך שיכלול:

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

### 3. הרצת הפרויקט הראשי

```bash
npm start
```

או:

```bash
node main.js
```

---

### 4. הרצת דוגמת CommonJS

```bash
npm run commonjs
```

או:

```bash
node commonjs/testCommonJS.js
```

---

<a id="application-flow"></a>

## זרימת האפליקציה

זרימת האפליקציה הראשית נשלטת על ידי `main.js`.

---

### שלב 1: ייבוא המודולים הדרושים

האפליקציה מייבאת את מחולל המזהים, את מנהל הטורניר ואת כלי ההדפסה.

```js
import { createIdGenerator } from "./modules/idGenerator.js";
import { TournamentManager } from "./modules/TournamentManager.js";
import {
  printTitle,
  printPlayers,
  printTeams,
  printMatches,
  printLeaderboard,
  printAllTournamentStats,
} from "./modules/printUtils.js";
```

---

### שלב 2: יצירת מחוללי מזהים

נוצרים שלושה מחוללי מזהים:

```js
const generatePlayerId = createIdGenerator("PLY");
const generateTeamId = createIdGenerator("TEAM");
const generateMatchId = createIdGenerator("MATCH");
```

לכל אחד מהם יש מונה משלו.

---

### שלב 3: יצירת מנהל הטורניר

```js
const tournament = new TournamentManager({
  generatePlayerId,
  generateTeamId,
  generateMatchId,
});
```

זה יוצר את האובייקט המרכזי ששולט במערכת הטורניר.

---

### שלב 4: יצירת שחקנים

הפרויקט יוצר שישה שחקנים:

```js
const player1 = tournament.createPlayer("ShadowFox", "Attacker");
const player2 = tournament.createPlayer("RocketBee", "Support");
const player3 = tournament.createPlayer("PixelNinja", "Defender");
const player4 = tournament.createPlayer("StormWolf", "Attacker");
const player5 = tournament.createPlayer("CyberCat", "Support");
const player6 = tournament.createPlayer("BugSlayer", "Defender");
```

---

### שלב 5: יצירת קבוצות

הפרויקט יוצר שתי קבוצות:

```js
const team1 = tournament.createTeam("Pixel Warriors", "Squad");
const team2 = tournament.createTeam("Console Kings", "Squad");
```

---

### שלב 6: הוספת שחקנים לקבוצות

כל קבוצה מקבלת שלושה שחקנים:

```js
tournament.addPlayerToTeam(player1.id, team1.id);
tournament.addPlayerToTeam(player2.id, team1.id);
tournament.addPlayerToTeam(player3.id, team1.id);

tournament.addPlayerToTeam(player4.id, team2.id);
tournament.addPlayerToTeam(player5.id, team2.id);
tournament.addPlayerToTeam(player6.id, team2.id);
```

---

### שלב 7: תזמון משחקים

הפרויקט מתזמן שני משחקים:

```js
const match1 = tournament.scheduleMatch(team1.id, team2.id);
const match2 = tournament.scheduleMatch(team2.id, team1.id);
```

---

### שלב 8: תיעוד תוצאות משחקים

הפרויקט מתעד שתי תוצאות משחק:

```js
tournament.recordMatchResult(match1.id, 12, 8);
tournament.recordMatchResult(match2.id, 7, 10);
```

---

### שלב 9: ניסיון לתעד תוצאה לא תקינה

הפרויקט מנסה לתעד שוב תוצאה עבור משחק שכבר הושלם:

```js
tournament.recordMatchResult(match1.id, 5, 4);
```

זה אמור להיכשל כי המשחק כבר הושלם.

---

### שלב 10: חיפוש שחקן לפי כינוי

הפרויקט מחפש שחקנים שהכינוי שלהם כולל `"shadow"`:

```js
const searchResults = tournament.findPlayerByNickname("shadow");
printPlayers(searchResults);
```

החיפוש לא תלוי באותיות גדולות או קטנות.

---

### שלב 11: הדפסת היסטוריית משחקים

הפרויקט מדפיס את כל המשחקים שהושלמו:

```js
printMatches(tournament.getCompletedMatches());
```

---

### שלב 12: הדפסת טבלת דירוג

הפרויקט מדפיס את טבלת הדירוג של הטורניר:

```js
printLeaderboard(tournament.getLeaderboard());
```

---

### שלב 13: הדפסת סטטיסטיקות טורניר

הפרויקט מחשב ומדפיס סטטיסטיקות טורניר מלאות:

```js
const stats = tournament.getTournamentStats();
printAllTournamentStats(stats);
```

---

### שלב 14: הדפסת מצב סופי

בסוף, הפרויקט מדפיס שוב את כל השחקנים, הקבוצות והמשחקים:

```js
printPlayers(tournament.getAllPlayers());
printTeams(tournament.getAllTeams());
printMatches(tournament.getAllMatches());
```

זה מראה איך הנתונים השתנו אחרי כל הפעולות.

---

<a id="core-data-models"></a>

## מודלי הנתונים המרכזיים

### מודל שחקן

אובייקט שחקן נראה כך:

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

שדות:

| שדה        | סוג            | משמעות                        |
| ---------- | -------------- | ----------------------------- |
| `id`       | string         | ID ייחודי של שחקן             |
| `nickname` | string         | שם תצוגה של השחקן             |
| `mainRole` | string         | התפקיד המרכזי של השחקן        |
| `teamId`   | string or null | ID של הקבוצה שאליה השחקן שייך |
| `isActive` | boolean        | האם השחקן פעיל                |
| `stats`    | object         | נתוני ביצועים של השחקן        |

---

### מודל קבוצה

אובייקט קבוצה נראה כך:

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

שדות:

| שדה        | סוג     | משמעות               |
| ---------- | ------- | -------------------- |
| `id`       | string  | ID ייחודי של קבוצה   |
| `name`     | string  | שם הקבוצה            |
| `gameMode` | string  | מצב המשחק של הקבוצה  |
| `players`  | array   | רשימת השחקנים בקבוצה |
| `wins`     | number  | מספר ניצחונות        |
| `losses`   | number  | מספר הפסדים          |
| `points`   | number  | נקודות דירוג         |
| `isActive` | boolean | האם הקבוצה פעילה     |

---

### מודל משחק

אובייקט משחק נראה כך:

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

שדות:

| שדה            | סוג            | משמעות                          |
| -------------- | -------------- | ------------------------------- |
| `id`           | string         | ID ייחודי של משחק               |
| `homeTeamId`   | string         | ID של הקבוצה הראשונה            |
| `awayTeamId`   | string         | ID של הקבוצה השנייה             |
| `gameMode`     | string         | מצב המשחק                       |
| `homeScore`    | number or null | ניקוד קבוצת הבית                |
| `awayScore`    | number or null | ניקוד קבוצת החוץ                |
| `winnerTeamId` | string or null | ID של הקבוצה המנצחת             |
| `status`       | string         | `Scheduled` או `Completed`      |
| `createdAt`    | string         | מחרוזת תאריך ISO של יצירת המשחק |
| `completedAt`  | string or null | מחרוזת תאריך ISO של השלמת המשחק |

---

<a id="javascript-concepts-practiced"></a>

## מושגי JavaScript שמתורגלים

### Variables

הפרויקט משתמש במשתנים כדי לשמור:

- שחקנים
- קבוצות
- משחקים
- תוצאות חיפוש
- סטטיסטיקות
- ניקודים
- חוקי מצבי משחק

דוגמאות:

```js
const player1 = tournament.createPlayer(...);
const stats = tournament.getTournamentStats();
```

---

### Functions

הפרויקט משתמש בפונקציות רבות, כולל:

- Factory functions
- Utility functions
- Class methods
- Generator functions
- CommonJS functions

דוגמאות:

```js
createPlayer();
createTeam();
createMatch();
calculateTournamentStats();
printTeams();
```

---

### Closures

מחולל המזהים הוא דוגמת ה-closure הברורה ביותר.

```js
export function createIdGenerator(prefix = "ID") {
  let currentId = 0;

  return function generateId() {
    currentId += 1;
    return `${prefix}-${currentId}`;
  };
}
```

הפונקציה הפנימית `generateId` זוכרת את `currentId`.

---

### Classes

הפרויקט משתמש במחלקה עבור לוגיקת הטורניר המרכזית:

```js
export class TournamentManager {
  // tournament logic here
}
```

זה מדגים תכנות מונחה עצמים.

---

### Factory Functions

Factory functions משמשות ליצירת אובייקטים נקיים.

דוגמאות:

```js
createPlayer();
createTeam();
createMatch();
```

זה הופך את יצירת האובייקטים למסודרת יותר.

---

### Arrays

הפרויקט משתמש במערכים עבור:

- שחקנים
- קבוצות
- משחקים

מתודות מערך חשובות שבהן משתמשים:

```js
find();
filter();
forEach();
map();
reduce();
sort();
```

---

### Objects

אובייקטים משמשים עבור:

- שחקנים
- קבוצות
- משחקים
- חוקי מצבי משחק
- סטטיסטיקות

דוגמה:

```js
this.gameModeRules = {
  Solo: {
    playersPerTeam: 1,
    winPoints: 3,
  },
  Duo: {
    playersPerTeam: 2,
    winPoints: 3,
  },
  Squad: {
    playersPerTeam: 3,
    winPoints: 3,
  },
};
```

---

### Object Methods

הפרויקט יכול להשתמש במתודות אובייקט כמו:

```js
Object.keys();
Object.values();
Object.entries();
```

הן שימושיות להדפסת ספירת מצבי משחק וסטטיסטיקות.

---

### String Methods

הפרויקט משתמש במתודות מחרוזת כמו:

```js
trim();
toLowerCase();
includes();
```

הן משמשות לניקוי שמות ולחיפוש שחקנים.

---

### Conditions

הפרויקט משתמש בהרבה משפטי `if` עבור ולידציה.

דוגמאות:

```js
if (!team) {
  console.log("Team not found.");
  return false;
}
```

---

### Switch Statement

קובץ הסטטיסטיקות יכול להשתמש ב-`switch` כדי להחזיר סטטיסטיקות שונות לפי `statType`.

---

### Modules

הפרויקט מדגים שתי מערכות מודולים.

הפרויקט הראשי:

```js
import
export
```

תיקיית CommonJS:

```js
require;
module.exports;
```

---

<a id="validation-and-error-handling"></a>

## ולידציה וטיפול בשגיאות

הפרויקט כולל ולידציה בסיסית שמונעת פעולות לא תקינות.

---

### ולידציה ביצירת שחקן

אי אפשר ליצור שחקן אם:

- הכינוי ריק.
- התפקיד המרכזי ריק.
- הכינוי כבר קיים.

---

### ולידציה ביצירת קבוצה

אי אפשר ליצור קבוצה אם:

- שם הקבוצה ריק.
- מצב המשחק לא תקין.
- שם הקבוצה כבר קיים.

---

### ולידציה בהוספת שחקן לקבוצה

הוספת שחקן לקבוצה נכשלת אם:

- השחקן לא קיים.
- הקבוצה לא קיימת.
- השחקן לא פעיל.
- הקבוצה לא פעילה.
- השחקן כבר שייך לקבוצה.
- הקבוצה כבר מלאה.

---

### ולידציה בתזמון משחק

תזמון משחק נכשל אם:

- אחת הקבוצות לא קיימת.
- שני מזהי הקבוצות זהים.
- אחת הקבוצות לא פעילה.
- הקבוצות לא משתמשות באותו מצב משחק.
- לאחת הקבוצות אין מספיק שחקנים.

---

### ולידציה בתיעוד תוצאת משחק

תיעוד תוצאה נכשל אם:

- המשחק לא קיים.
- המשחק כבר הושלם.
- אחד הניקודים לא תקין.
- הניקודים שווים.

---

<a id="example-scenario"></a>

## תרחיש לדוגמה

תרחיש הדמו יוצר את השחקנים האלה:

| שחקן       | תפקיד    |
| ---------- | -------- |
| ShadowFox  | Attacker |
| RocketBee  | Support  |
| PixelNinja | Defender |
| StormWolf  | Attacker |
| CyberCat   | Support  |
| BugSlayer  | Defender |

לאחר מכן המערכת יוצרת את הקבוצות האלה:

| קבוצה          | מצב משחק |
| -------------- | -------- |
| Pixel Warriors | Squad    |
| Console Kings  | Squad    |

לאחר מכן המערכת מבצעת פעולות כמו:

- הוספת שלושה שחקנים ל-Pixel Warriors.
- הוספת שלושה שחקנים ל-Console Kings.
- תזמון שני משחקים בין הקבוצות.
- תיעוד שתי תוצאות תקינות.
- ניסיון לתעד תוצאה עבור משחק שכבר הושלם.
- חיפוש ShadowFox.
- הדפסת משחקים שהושלמו.
- הדפסת טבלת הדירוג.
- הדפסת סטטיסטיקות הטורניר הסופיות.

התרחיש הזה עוזר לבדוק חלקים רבים של המערכת בהרצה אחת.

---

<a id="current-limitations"></a>

## מגבלות נוכחיות

הפרויקט הוא פרויקט תרגול, ולכן יש לו כמה מגבלות.

### 1. אין מסד נתונים

כל הנתונים נשמרים בזיכרון.

כאשר התוכנית נעצרת, כל הנתונים נמחקים.

אין מסד נתונים כמו:

- MongoDB
- MySQL
- PostgreSQL
- SQLite

---

### 2. אין קלט מהמשתמש

הפרויקט לא מבקש קלט מהמשתמש.

כל הפעולות כתובות ישירות בתוך `main.js`.

---

### 3. אין API

הפרויקט לא חושף HTTP API.

אין שרת Express.

---

### 4. אין Frontend

לפרויקט אין ממשק ווב.

הכל מודפס בטרמינל.

---

### 5. אין Authentication

אין מערכת התחברות.

אין תפקידי משתמש כמו:

- Admin
- Player
- Coach

---

### 6. אין שמירה קבועה של משחקים

המשחקים נשמרים רק בזיכרון.

---

### 7. אין Unit Tests

הפרויקט כרגע מדגים התנהגות דרך `main.js`, אבל הוא לא כולל testing framework כמו:

- Jest
- Vitest
- Mocha

---

### 8. אין תיקו

הפרויקט לא תומך במשחקים שמסתיימים בתיקו.

זה שומר על לוגיקת דירוג פשוטה עבור פרויקט של יום אחד.

---


<a id="project-link"></a>

## קישור לפרוייקט

```txt
https://github.com/yosefhaim707/game-manager-week-2
```

---

<a id="final-notes"></a>

## הרעיונות המרכזיים שחשוב להבין מהפרויקט:

- איך הנתונים זורמים מ-`main.js` אל `TournamentManager`.
- איך `TournamentManager` שולט במערכת.
- איך factory functions יוצרות אובייקטים נקיים.
- איך תוצאות משחקים מעדכנות את דירוג הקבוצות.
- איך סטטיסטיקות מחושבות ממערכים.
- איך closures יכולות ליצור מונים פרטיים.
- איך ES Modules ו-CommonJS שונים זה מזה.
