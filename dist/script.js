const wordList = [
"CALME","DROLE","VERRE","COEUR","DOUTE","PAYER","FAUTE","SINON","BOIRE","ANNEE","LIVRE","SUJET","MORTE","DINER","CHOIX","ORDRE","PHOTO","TIRER","MARCH","COMME", "VOTRE", "CETTE", "QUAND","MERCI","AVOIR", "AUTRE", "TEMPS", "NOTRE", "MONDE","PLACE", "PEINE", "FEMME", "PORTE", "CHOSE", "VENIR", "JUSTE","APRES", "PLEIN", "ENFIN","GARDE", "VIVRE", "CAUSE", "TERRE", "PARMI", "SELON", "JEUNE","ABOIS", "ADIEU", "AIDEE", "AIDER", "AGEES", "AGACE", "AGILE", "AINES", "AIPSE", "AIRES", "ALGUE", "ALLER", "ALLEU", "AMANT", "AMERS", "AMOUR", "ANTRE", "APTES", "ARGOT", "APRÈS", "ARBRE", "ASTER", "AUBEL", "AUCUN", "AULNE", "AUREL", "AUSSI", "AUTEL", "AUTRE", "AVANT", "AVION", "AVOIR", "AVRIL", "AIRES", "AÏEUL", "ACIER", "AINSI", "AMOUR", "ASSEZ", "ATOME", "ATLAS", "AVALE", "AVOUE", "AYANT", "AZOTE","BACON", "BAUME", "BAULE", "BALLE", "BASES", "BATIR", "BEBES", "BELAU", "BEIGE", "BELLE", "BERET", "BIENS", "BETES", "BETON", "BIJOU", "BISOU", "BIÈRE", "BLANC", "BLASE", "BLASÉ", "BLAUE", "BLEUE", "BLOND", "BORNE", "BOTTE", "BOUTE", "BRIDE", "BOÎTE", "BRUME", "BÂTON", "BULBE","CADET", "CAFES", "CALES", "CALOT", "CAMP", "CAPOT", "CASES", "CAUSE", "CEDRE", "CHAUD", "CHEVAL", "CHERI", "CHIEN", "CHOSE", "COLLE", "COMME", "CORPS", "COUPE", "CRUEL", "CALME", "CARRÉ", "CARTE", "CASSÉ", "CLAIR", "CLOSE", "CLEFS", "COPIE", "CORDE", "COGNE", "COURS", "COURU", "COURT", "CRÉER", "CURIE", "CRABE", "CREER", "CRUES", "CREUX", "CROIT", "CROSS","DAMAS", "DEHOR", "DEVIE", "DOIGT", "DROIT", "DUALE", "DEPIT", "DEPOT", "DEGEL", "DÉBUT", "DÉCOR", "DANSE", "DEGRÉ", "DENTS", "DOGME", "DORES", "DOTER", "DONNÉ", "DÉBIT", "DÉCÈS", "DURER","EGARE", "ELITE", "ENCORE", "ENTRE", "ENVIE", "EPAVE", "EPEES", "EPAIS", "EPATE", "EYLAU", "EFFET", "EXACT", "ÉCRIT", "ÉPELER", "ÉTAGE", "ÉTAIT", "ÉTAPE", "EVADE", "EVITE", "EXCES", "EXIGE","FADES", "FAIRE", "FERME", "FLEUR", "FLÂNER", "FONCÉ", "FRAIS", "FIGUE", "FEINT", "FEMME", "FERRY", "FERRE", "FILLE", "FILER", "FILMS", "FLOUE", "FLUTE", "FONCE", "FORCE", "FONTE", "FORME", "FOULE", "FOIES", "FUMES", "FORÊT", "FOUL", "FRISE", "FROID", "FRUIT", "FRÈRE", "FRÊLE","GALET", "GARDER", "GAUCHE", "GAULE", "GAZON", "GELEE", "GENRE", "GILET", "GIVRE", "GRAND", "GRAVE", "GRECS", "GROUPE", "GAMME", "GLACE", "GOUTS","HABIT", "HANTE", "HEURE", "HIBOU", "HIPPO", "HIVER", "HOTEL", "HOMME", "HERBE", "HURLE", "HUILE", "HUMUS", "HYMNE","IMAGE", "INTER", "JAMBE", "JEUDI", "JOLIE", "JOUER", "JUSTE", "JUGEE", "JAUNE", "JEUNE", "JESUS", "JETEE", "JETER", "JETON", "JOUET", "JOURS", "JURES", "JURON","KHANS","LAQUE", "LARUE", "LAUER", "LAURE", "LAUZE", "LECON", "LIGNE", "LIVRE", "LUNDI", "LUTEA", "LARGE", "LAVER", "LISTE", "LIVRE", "LOURD", "LONGE", "LOGIS", "LOUEE", "LOYAL", "LUEUR", "LUTTE","MARCHÉ", "MARDI", "MAIRE", "MAULE", "MALIN", "MAMAN", "MERCI", "MILLE", "MATIN", "MENES", "MEULE", "MICHE", "MIEUX", "MINCE", "MOINS", "MOITE", "MOREL", "MONDE", "MORNE", "MÉTAL", "MÉTRO", "MURET", "MYTHE","NACRE", "NAVIE", "NOTRE", "NOVEL", "NUAGE", "NEIGE", "NEONS", "NICHE", "NORME","OASIS", "ORAGE", "ORNES", "OBJET", "OCÉAN", "ORDRE", "ORALE", "OUEST", "OSANT", "OXYDE","PAIRE", "PACTE", "PARTE", "PANSE", "PARLE","PAUME", "PASSÉ", "PAULE", "PETIT", "PEKIN", "PAUSE", "PAYER", "PAYES", "PHARE", "PHILO", "PIEUX", "PINCE", "PIQUE", "PIRES", "PERDU","PIEDS","PISTE", "PIÈCE", "PLACE", "PLANE","PLEIN", "PLOMB", "POIDS", "PLUIE", "POINT","PORTE", "PORTER", "POLES", "POLIE","POULE","PORES", "POSER", "POSTE", "POUCE","POÈME", "PRETS", "PREUX","QUARE", "QUARK", "QUAND", "QUEUE", "QUART","RANGE", "RATES", "RAYON", "RADIO", "RALES", "RAVIR", "RAVIS", "RAYEE", "RECUE", "REFUS", "REGIE", "REGIS", "REPAS", "RESTE", "RIANT", "RICHE", "RIBOT", "RÊVER", "ROUGE", "ROUGI", "ROUTE", "ROUES", "RUBAN", "RÈGLE","SACRE", "SAGES", "SALUE", "SALUT", "SAULE", "SAINT", "SAUTÉ", "SALIR", "SALLE", "SEMES", "SEULE", "SIENS", "SIGNE", "SINGE", "SERVE", "SOLEX", "SOUDE", "SOUPE", "SUJET", "SURIN", "SABLE", "SCEAU", "SIÈCLE", "SOINS", "SUCRE","TAULE", "TARES", "TAXIS", "TEMPS", "TENUE", "TERRE", "TIRER", "TOURE", "TOUSE", "TOUTE", "TROIS","TABLE", "TEMPE", "TETES", "TIEDE", "TRACE", "TREVE", "TENIR", "TIGES", "TRAIN","USINE","VALUE", "VALVE", "VASES", "VENIR", "VIEUX", "VILLE", "VIVRE", "VOTRE", "VOEUX", "VACHE", "VAGUE", "VERBE", "VERRE", "VECUS", "VETUS", "VISSE", "VITAL", "VINGT", "VOILE", "VOTER", "VUTE", "VOGUE", "VOLER", "VRAIE", "VÊTIR","ZAÏRE", "ZESTE", "ZIPPÉ", "ZÉBRÉ","CHAOS", "JACOB", "RÈGNE", "ORAGE", "PISSE", "ÉPOUX", "COACH", "ENNUI", "POÈME", "USAGE", "REVUE", "OTAGE", "ROYAL", "TEXTE", "TIGRE", "POUCE", "FRUIT", "POÈTE", "SAVON", "SERRE", "MÉTAL", "JOINT", "CLOWN", "TRÔNE", "SHIRT", "VODKA", "NUAGE", "ÉTUDE", "VOMIR", "PORNO", "JAMIE", "ÉCART", "GRÈVE", "SUBIR", "MÊLER", "RANGE", "VOILE", "HONTE","ARABE", "BAKER", "BATTE", "BEACH", "BIDON", "CADRE", "CANAL", "CIVIL", "CONNE", "DÉCÈS", "ENGIN", "EXTRA", "FILET", "FOIRE", "GENOU", "LÉGAL", "MAFIA", "MOTIF", "MÉTÉO", "NIQUE", "NIÈCE", "NOYER", "PEARL", "PENNY", "PESTE", "POKER", "POMPE", "PÉTER", "QUÊTE", "SABRE", "SELLE", "SUCER", "TACHE", "TRIBU", "VERTU","STMPA"
];
const maxGuesses = 6;
const wordLength = 5;
let currentGuessCount = 0;
let answer = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();

const grid = document.getElementById("grid");
const input = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-btn");
const message = document.getElementById("message");

// 建立格子
for (let i = 0; i < maxGuesses * wordLength; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  grid.appendChild(cell);
}

// 顯示提示訊息
function showMessage(text, color = "#e2e2e2") {
  message.textContent = text;
  message.style.color = color;
}

// 建立重新開始按鈕（初始隱藏）
const restartBtn = document.createElement("button");
restartBtn.textContent = "Recommencer";
restartBtn.id = "restart-btn";
restartBtn.classList.add("button");  // 套用和 submitBtn 一樣的 CSS 樣式
restartBtn.style.display = "none";  // 初始不顯示

// 動態重置遊戲狀態
restartBtn.addEventListener("click", () => {
  currentGuessCount = 0;
  answer = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();

  // 清空格子
  for (let cell of grid.children) {
    cell.textContent = "";
    cell.classList.remove("correct", "present", "absent");
  }

  // 啟用輸入和按鈕
  submitBtn.disabled = false;
  input.disabled = false;
  input.value = "";
  input.focus();

  // 隱藏重新開始按鈕
  restartBtn.style.display = "none";

  // 清空訊息
  showMessage("");
});

message.after(restartBtn);

// 檢查輸入字長度（允許任意單字，不檢查是否在字庫）
function checkGuess(guess) {
  guess = guess.toUpperCase();
  if (guess.length !== wordLength) {
    showMessage("Veuillez entrer un mot de 5 lettres.", "orange");
    return false;
  }
  return true;
}

// 更新格子顏色與內容
function updateGrid(guess) {
  const start = currentGuessCount * wordLength;
  const guessArr = guess.toUpperCase().split("");
  const answerArr = answer.split("");
  const cellList = grid.children;

  const letterStatus = new Array(wordLength).fill("absent");
  const answerLetterCount = {};

  // 統計答案字母數量
  for (let l of answerArr) {
    answerLetterCount[l] = (answerLetterCount[l] || 0) + 1;
  }

  // 第一輪：找出正確位置的字母
  for (let i = 0; i < wordLength; i++) {
    if (guessArr[i] === answerArr[i]) {
      letterStatus[i] = "correct";
      answerLetterCount[guessArr[i]]--;
    }
  }

  // 第二輪：找出存在但位置錯的字母
  for (let i = 0; i < wordLength; i++) {
    if (letterStatus[i] === "correct") continue;
    if (answerLetterCount[guessArr[i]] > 0) {
      letterStatus[i] = "present";
      answerLetterCount[guessArr[i]]--;
    }
  }

  // 套用到格子
  for (let i = 0; i < wordLength; i++) {
    const cell = cellList[start + i];
    cell.textContent = guessArr[i];
    cell.classList.add(letterStatus[i]); // 加上 correct / present / absent 類別
  }
}

// 提交按鈕事件
submitBtn.addEventListener("click", () => {
  const guess = input.value.trim().toUpperCase();
  if (!checkGuess(guess)) return;
  updateGrid(guess);
  currentGuessCount++;
  input.value = "";
  input.focus();

  if (guess === answer) {
    showMessage("Félicitations! Vous avez gagné!", "#4caf50");
    submitBtn.disabled = true;
    input.disabled = true;
    restartBtn.style.display = "block"; // 顯示重新開始按鈕
  } else if (currentGuessCount === maxGuesses) {
    showMessage(`Dommage! La réponse était : ${answer}`, "#f44336");
    submitBtn.disabled = true;
    input.disabled = true;
    restartBtn.style.display = "block"; // 顯示重新開始按鈕
  } else {
    showMessage(""); // 清除訊息
  }
});

// 支援按下 Enter 鍵
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    submitBtn.click();
  }
});

input.focus();