// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgM3fJNCZsCX_RboXoiKUGOCJlwkivGo0",
    authDomain: "ssss-c151d.firebaseapp.com",
    databaseURL: "https://ssss-c151d-default-rtdb.firebaseio.com",
    projectId: "ssss-c151d",
    storageBucket: "ssss-c151d.firebasestorage.app",
    messagingSenderId: "215966710582",
    appId: "1:215966710582:web:97b2af99bfefa6daa29197",
    measurementId: "G-70VCT04V1P"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const wordList = [
  "CALME", "DROLE", "VERRE", "COEUR", "DOUTE", "FAUTE", "SINON", "ANNEE",
  "LIVRE", "SUJET", "MORTE", "DINER", "CHOIX", "ORDRE", "PHOTO", "MARCH",
  "COMME", "VOTRE", "CETTE", "QUAND", "MERCI", "AUTRE", "TEMPS", "NOTRE",
  "MONDE", "PLACE", "PEINE", "FEMME", "PORTE", "CHOSE", "JUSTE", "APRES",
  "PLEIN", "ENFIN", "GARDE", "CAUSE", "TERRE", "PARMI", "SELON", "JEUNE",
  "ABOIS", "ADIEU", "AGEES", "AGACE", "AGILE", "AINES", "AIPSE", "AIRES",
  "ALGUE", "ALLEU", "AMANT", "AMERS", "AMOUR", "ANTRE", "APTES", "ARGOT",
  "APRÈS", "ARBRE", "ASTER", "AUBEL", "AUCUN", "AULNE", "AUREL", "AUSSI",
  "AUTEL", "AVANT", "AVION", "AVRIL", "ACIER", "AINSI", "ASSEZ", "ATOME",
  "ATLAS", "AVALE", "AVOUE", "AZOTE", "BACON", "BAUME", "BAULE", "BALLE",
  "BASES", "BEBES", "BELAU", "BEIGE", "BELLE", "BERET", "BIENS", "BETES",
  "BETON", "BIJOU", "BISOU", "BIÈRE", "BLANC", "BLASE", "BLASÉ", "BLAUE",
  "BLEUE", "BLOND", "BORNE", "BOTTE", "BOUTE", "BRIDE", "BOÎTE", "BRUME",
  "BÂTON", "BULBE", "CADET", "CAFES", "CALES", "CALOT", "CAPOT", "CASES",
  "CEDRE", "CHAUD", "CHERI", "CHIEN", "COLLE", "CORPS", "COUPE",
  "CRUEL", "CARRÉ", "CARTE", "CASSÉ", "CLAIR", "CLOSE", "CLEFS", "COPIE",
  "CORDE", "COGNE", "COURS", "COURT", "CRABE", "CREER", "CRUES", "CREUX",
  "CROIT", "CROSS", "DAMAS", "DEHOR", "DEVIE", "DOIGT", "DROIT", "DUALE",
  "DEPIT", "DEPOT", "DEGEL", "DÉBUT", "DÉCOR", "DANSE", "DEGRÉ", "DENTS",
  "DOGME", "DORES", "DONNÉ", "DÉBIT", "DÉCÈS", "EGARE", "ELITE", 
  "ENTRE", "ENVIE", "EPAVE", "EPEES", "EPAIS", "EPATE", "EYLAU", "EFFET",
  "EXACT", "ÉCRIT", "ÉTAGE", "ÉTAIT", "ÉTAPE", "EVADE", "EVITE", "EXCES",
  "EXIGE", "FADES", "FERME", "FLEUR", "FONCÉ", "FRAIS", "FIGUE", "FEINT",
  "FERRY", "FERRE", "FILLE", "FILMS", "FLOUE", "FLUTE", "FONCE", "FORCE",
  "FONTE", "FORME", "FOULE", "FOIES", "FUMES", "FORÊT", "FRISE", "FROID",
  "FRUIT", "FRÈRE", "FRÊLE", "GALET", "GAULE", "GAZON", "GELEE", "GENRE",
  "GILET", "GIVRE", "GRAND", "GRAVE", "GRECS", "GAMME", "GLACE",
  "GOUTS", "HABIT", "HANTE", "HEURE", "HIBOU", "HIPPO", "HIVER", "HOTEL",
  "HOMME", "HERBE", "HURLE", "HUILE", "HUMUS", "HYMNE", "IMAGE", "INTER",
  "JAMBE", "JEUDI", "JOLIE", "JUSTE", "JAUNE", "JESUS", "JETEE", "JETON",
  "JOUET", "JOURS", "JURES", "JURON", "KHANS", "LAQUE", "LARUE", "LAURE",
  "LAUZE", "LECON", "LIGNE", "LUNDI", "LUTEA", "LARGE", "LISTE", "LOURD",
  "LONGE", "LOGIS", "LOUEE", "LOYAL", "LUEUR", "LUTTE", "MARDI", "MAIRE",
  "MAULE", "MALIN", "MAMAN", "MILLE", "MATIN", "MENES", "MEULE", "MICHE",
  "MIEUX", "MINCE", "MOINS", "MOITE", "MOREL", "MORNE", "MÉTAL", "MÉTRO",
  "MURET", "MYTHE", "NACRE", "NAVIE", "NOTRE", "NOVEL", "NUAGE", "NEIGE",
  "NEONS", "NICHE", "NORME", "OASIS", "ORAGE", "ORNES", "OBJET", "OCÉAN",
  "ORALE", "OUEST", "OSANT", "OXYDE", "PAIRE", "PACTE", "PARTE", "PANSE",
  "PAUME", "PASSÉ", "PAULE", "PETIT", "PEKIN", "PAUSE", "PAYES", "PHARE",
  "PHILO", "PIEUX", "PINCE", "PIQUE", "PIRES", "PERDU", "PIEDS", "PISTE",
  "PIÈCE", "PLACE", "PLANE", "PLEIN", "PLOMB", "POIDS", "PLUIE", "POINT",
  "PORTE", "POLES", "POLIE", "POULE", "PORES", "POSTE", "POUCE", "POÈME",
  "PRETS", "PREUX", "QUARE", "QUARK", "QUART", "RANGE", "RATES", "RAYON",
  "RADIO", "RALES", "RAVIR", "RAVIS", "RAYEE", "RECUE", "REFUS", "REGIE",
  "REGIS", "REPAS", "RESTE", "RIANT", "RICHE", "RIBOT", "ROUTE", "ROUES",
  "RUBAN", "RÈGLE", "SACRE", "SAGES", "SALUE", "SALUT", "SAULE", "SAINT",
  "SAUTÉ", "SALIR", "SALLE", "SEMES", "SEULE", "SIENS", "SIGNE", "SINGE",
  "SERVE", "SOLEX", "SOUDE", "SOUPE", "SUJET", "SURIN", "SABLE", "SCEAU",
  "SOINS", "SUCRE", "TAULE", "TARES", "TAXIS", "TEMPS", "TENUE", "TERRE",
  "TOURE", "TOUSE", "TOUTE", "TROIS", "TABLE", "TEMPE", "TETES", "TIEDE",
  "TRACE", "TREVE", "TIGES", "TRAIN", "USINE", "VALUE", "VALVE", "VASES",
  "VIEUX", "VILLE", "VOEUX", "VACHE", "VAGUE", "VERBE", "VERRE", "VECUS",
  "VETUS", "VISSE", "VITAL", "VINGT", "VOILE", "VOTER", "VOGUE", "VOLER",
  "VRAIE", "VÊTIR", "ZAÏRE", "ZESTE", "ZIPPÉ", "ZÉBRÉ", "CHAOS", "JACOB",
  "RÈGNE", "ORAGE", "PISSE", "ÉPOUX", "COACH", "ENNUI", "POÈME", "USAGE",
  "REVUE", "OTAGE", "ROYAL", "TEXTE", "TIGRE", "POUCE", "FRUIT", "POÈTE",
  "SAVON", "SERRE", "MÉTAL", "JOINT", "CLOWN", "TRÔNE", "SHIRT", "VODKA",
  "NUAGE", "ÉTUDE", "VOMIR", "PORNO", "JAMIE", "ÉCART", "GRÈVE", "SUBIR",
  "MÊLER", "RANGE", "VOILE", "HONTE", "ARABE", "BAKER", "BATTE", "BEACH",
  "BIDON", "CADRE", "CANAL", "CIVIL", "CONNE", "DÉCÈS", "ENGIN", "EXTRA",
  "FILET", "FOIRE", "GENOU", "LÉGAL", "MAFIA", "MOTIF", "MÉTÉO", "NIQUE",
  "NIÈCE", "NOYER", "PEARL", "PENNY", "PESTE", "POKER", "POMPE", "PÉTER",
  "QUÊTE", "SABRE", "SELLE", "SUCER", "TACHE", "TRIBU", "VERTU", "STMPA",
  "AMOUR", "HOMME", "FEMME", "GRAND", "PETIT", "TABLE", "LIVRE",
  "HEURE", "PORTE", "TERRE", "MAINS", "VILLE", "ROUTE", "METRE", "ROUGE",
  "BLEUE", "VERTE", "BLANC", "NOIRE", "RICHE", "CHAOS",
  "FROID", "SALEE", "JEUNE", "VIEUX", "SEULE", "AUTRE", "TOUTE", "DOUCE",
  "LOURD", "LEGER", "DROIT", "SAGES", "CALME", "MALIN", "JAUNE", "MOINS",
  "APRES", "AVANT", "ENTRE", "PARMI", "GRACE", "ENFIN", "VOIRE",
  "AINSI", "ECOLE", "FRUIT", "POMME",
  "SUCRE", "PLAGE", "FLEUR", "ARBRE", "HERBE", "SABLE", "ROCHE", "BRUIT",
  "LIGNE", "MONDE", "TEMPS", "SPORT",
  "IMAGE", "JOUET", "POINT", "CHOSE", "ONCLE", "TANTE", "POISS", "GARDE",
  "CHAMP", "LITRE", "ORDRE", "CORPS", "REGLE", "POIDS", "GOUST",
  "COEUR", "PARCS", "POSTE", "FERME", "PLUME", "ETOIL",
  "MERCI", "DREAM",
  "PAUSE", "FINIE", "DEBUT", "PENSE", "VENTE", "SERIE", "OMBRE",
  "HAUTE", "BASSE", "PEINE", "FORME", "SIGNE", "NIVEA",
  "IDEAL", "CRUEL", "VRAIE", "BLESS",
  "CLEFS", "BALLE", "MAMIE", "COULE", "DOUCE", "FINIR", "GENRE",
  "GRAND", "GROSS", "HAUTE", "HORDE", "LEGER", "LIENS", "LOURD",
  "MAGIE", "MAIRE", "MANGE", "MARGE", "MIXTE", "MONTE", "NULLE",
  "PETIT", "POCHE", "POETE", "PRETE", "PROPS", "RAIDE", "RENTE",
  "ROBOT", "SAINT", "SALLE", "SCENE", "SEUIL", "SIGNE", "SOLDE", "SONGE",
  "SUITE", "TASSE", "THEME", "TIGRE", "TRIST", "UNION", "USURE", "VALSE",
  "VERRE", "VERTE", "VITES", "VOILE", "VOTRE", "ZIIPE", "ZONES", "ABOND",
  "ACTIF", "AGILE", "AIDES", "ALORS", "AMERE", "AMPER", "ANGOI", "ASSIS",
  "AUTAN", "AVENT", "AVOUE", "AVOIR", "BERCE", "BIAIS", "BIJOU", "BILLE",
  "BLASE", "BLESS", "BOUGE", "BOUTE", "BRAVE", "BRUIT", "BRUNS", "CADRE",
  "CAMPE", "CENSE", "CHAOS", "CHUTE", "CINTR", "CIRQU", "CLAIR", "CLOSE",
  "CLOWN", "COMBO", "CREUX", "CRUES", "CUBES", "CULTA", "CURIE", "CYCLE",
  "DEBIT", "DEBUT", "DECAR", "DEGEL", "DEMON", "DENSE", "DEPIT", "DEPOT",
  "DESIR", "DEVIN", "DICHO", "DIGNE", "DISEE", "DONNE", "DOSSI", "DOUZE",
  "DRILL", "DRONE", "DURCI", "ECLAT", "ECRAN", "ELANC", "ELITE", "EMBLE",
  "ENFUI", "ENJEU", "ENVIE", "EPAIS", "EPAVE", "ETAPE", "ETRES", "EXACT",
  "FACHE", "FARCE", "FAUNE", "FIERE", "FIXEE", "FLUID", "FONDS",
  "FORME", "FRANC", "FREIN", "FUNNY", "FUSEE", "GEANT", "GELER", "GENRE",
  "GERER", "GIRAL", "GLACE", "GLOUP", "GOMME", "GOUFF", "GOUTS", "GRELE",
  "GRISA", "GUIDE", "HAINE", "HARDI", "HOULE", "IDEES", "IGNOR", "IMPLI",
  "INDEX", "INFOS", "INTEL", "ISSUE", "IVROG", "JETER", "JOINT", "JUMEL",
  "JUPON", "KARMA", "LACER", "LANCE", "LEZAR", "LIENS", "LIGNE", "LIMON",
  "LODGE", "LOUPE", "LUCID", "MACON", "MAGIE", "MAIGR", "MAINS",
  "MAJOR", "MALIN", "MANGA", "MARDI", "MASSE", "MEMOR", "MENER", "METRO",
  "MIELS", "MIRER", "MIXTE", "MODES", "MOINS", "MONDE", "MONTE", "MORAL",
  "MOULE", "MURET", "MYTHE", "NAIFS", "NANAS", "NAUSE", "NEGAT", "NEIGE",
  "NEMES", "NICHE", "NOEUR", "NOMME", "NORME", "NOYER", "NUDES", "NUITS",
  "OBJET", "OGIVE", "OPERA", "OPERE", "OPINE", "ORDRE", "ORGAS", 
  "OSSER", "OUAIS", "OURSE", "OUTIL", "OUVRE", "OXYDE", "PACTS", "PALME",
  "PANNE", "PAREE", "PARIS", "PARLE", "PARMI", "PASSE", "PATER", "PAUME",
  "PENDE", "PENSE", "PERDU", "PERTE", "PHARE", "PHASE", "PHOTO", "PIECE",
  "PIQUE", "PISTE", "PLACE", "PLAID", "PLAGE", "PLAIN", "PLAIS", "PLIER",
  "PLOMB", "POINT", "POIRE", "POISS", "POLAR", "PONTS", "PORTE", "POSER",
  "POSTE", "POUCE", "POURR", "POWER", "PRESS", "PRIME", "PRODU", "PROIE",
  "PROSE", "PROUT", "PRUNE", "PSCHI", "PULPE", "PURES", "QUART", "QUETE",
  "QUEUE", "RACHE", "RAIDE", "RAILS", "RAIRE", "RAMPE", "RAPID", "RARES",
  "RASER", "RATTE", "RAYON",
  "REFUS", "REGAL", "REGNE", "RELIE", "REMIX", "RENTR", "REPAS", "REPIT",
  "REVUE", "RIVES", "RIVAL", "ROBES", "ROCHE", "ROMAN", "RONDE", "ROSEE", 
  "ROUGE", "ROYAL", "RUBAN", "RUCHE", "SABRE", "SAGES", "SAINT", "SALLE", 
  "SALSA", "SCIES", "SCOUT", "SECHE", "SELON", "SERUM", "SEUIL", "SIGNE",
  "SOINS", "SOLDE", "SOMME", "SONGE", "SOUCI", "SOURD", "SPORT", "STAGE", 
  "SUCRE", "SUEDE", "SUITE", "SUPER", "TABAC", "TABLE", "TALON", "TARIF", 
  "TASSE", "TEMPS", "TERRE", "TEXTE", "THEME", "THESE", "TIGRE", "TITRE", 
  "TONUS", "TOTAL", "TOUPE", "TOUTE", "TRACE", "TRAIT", "TRIBU", "TRONE",
  "TUBER", "TUYAU", "UNION", "UNITE", "USAGE" ,"USINE", "USUEL", "USURE", 
  "VALET", "VALSE", "VASTE", "VEINE", "VELOS", "VENTE", "VERBE", "VERRE", 
  "VERSO", "VERTE", "VESTE", "VETUS", "VIGIE", "VIOLE", "VIRUS", "VISAS",
  "VITES", "VOEUX", "VOILE", "VOLEE", "VOLET", "VOLUM", "VOTRE", "VRAIE",
  "YATCH", "YOGUR", "ZELOS", "ZEROS", "ZONES", "ZOUKE", "ZYGOM"
];
const maxGuesses = 6;
const wordLength = 5;
let currentGuessCount = 0;
let answer = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
let gameStartTime; // To track game duration

const grid = document.getElementById("grid");
const input = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-btn");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restart-btn"); // Get the existing restart button

const submitScoreBtn = document.getElementById("submit-score-btn");
const viewLeaderboardBtn = document.getElementById("view-leaderboard-btn");
const leaderboardDiv = document.getElementById("leaderboard");
const leaderboardList = document.getElementById("leaderboard-list");
const hideLeaderboardBtn = document.getElementById("hide-leaderboard-btn");

// Initialize game on load
initializeGame();

function initializeGame() {
    currentGuessCount = 0;
    answer = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();

    // Clear grid
    for (let cell of grid.children) {
        cell.textContent = "";
        cell.classList.remove("correct", "present", "absent");
    }
    grid.innerHTML = ''; // Clear existing cells for fresh start

    // Create cells
    for (let i = 0; i < maxGuesses * wordLength; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell);
    }

    // Enable input and buttons
    submitBtn.disabled = false;
    input.disabled = false;
    input.value = "";
    input.focus();

    // Hide restart and submit score buttons
    restartBtn.style.display = "none";
    submitScoreBtn.style.display = "none";
    hideLeaderboard(); // Ensure leaderboard is hidden on restart

    // Clear message
    showMessage("");

    // Start game timer
    gameStartTime = Date.now();
}

// Display message
function showMessage(text, color = "#e2e2e2") {
    message.textContent = text;
    message.style.color = color;
}

// Check input word length
function checkGuess(guess) {
    guess = guess.toUpperCase();
    if (guess.length !== wordLength) {
        showMessage("Veuillez entrer un mot de 5 lettres.", "orange");
        return false;
    }
    return true;
}

// Update grid colors and content
function updateGrid(guess) {
    const start = currentGuessCount * wordLength;
    const guessArr = guess.toUpperCase().split("");
    const answerArr = answer.split("");
    const cellList = grid.children;

    const letterStatus = new Array(wordLength).fill("absent");
    const answerLetterCount = {};

    // Count letters in the answer
    for (let l of answerArr) {
        answerLetterCount[l] = (answerLetterCount[l] || 0) + 1;
    }

    // First pass: find correct letters (green)
    for (let i = 0; i < wordLength; i++) {
        if (guessArr[i] === answerArr[i]) {
            letterStatus[i] = "correct";
            answerLetterCount[guessArr[i]]--;
        }
    }

    // Second pass: find present but misplaced letters (yellow)
    for (let i = 0; i < wordLength; i++) {
        if (letterStatus[i] === "correct") continue; // Skip already marked correct letters
        if (answerLetterCount[guessArr[i]] > 0) {
            letterStatus[i] = "present";
            answerLetterCount[guessArr[i]]--;
        }
    }

    // Apply styles to cells
    for (let i = 0; i < wordLength; i++) {
        const cell = cellList[start + i];
        cell.textContent = guessArr[i];
        // Add a small delay for animation effect (optional)
        setTimeout(() => {
            cell.classList.add(letterStatus[i]);
        }, i * 100); // Stagger the animation
    }
}

// Game win condition
function winGame() {
    showMessage("Félicitations! Vous avez gagné!", "#4caf50");
    submitBtn.disabled = true;
    input.disabled = true;
    restartBtn.style.display = "block";
    submitScoreBtn.style.display = "block"; // Show submit score button
}

// Game lose condition
function loseGame() {
    showMessage(`Dommage! La réponse était : ${answer}`, "#f44336");
    submitBtn.disabled = true;
    input.disabled = true;
    restartBtn.style.display = "block";
    submitScoreBtn.style.display = "block"; // Show submit score button
}

// --- Leaderboard Functions ---

// Submit score to Firebase
async function submitScore() {
    const playerName = prompt("Félicitations ! Entrez votre nom pour le classement :");
    if (!playerName) {
        showMessage("Soumission de score annulée.", "orange");
        return;
    }

    const timeTaken = Math.floor((Date.now() - gameStartTime) / 1000); // Time in seconds
    const scoreData = {
        name: playerName.trim(),
        guesses: currentGuessCount,
        time: timeTaken,
        timestamp: firebase.database.ServerValue.TIMESTAMP // Firebase server timestamp
    };

    try {
        await database.ref("wordleLeaderboard").push(scoreData);
        showMessage("Votre score a été soumis au classement !", "#4caf50");
        submitScoreBtn.style.display = "none"; // Hide after submission
        fetchLeaderboard(); // Refresh leaderboard after submission
    } catch (error) {
        showMessage("Erreur lors de la soumission du score: " + error.message, "red");
        console.error("Firebase submit error:", error);
    }
}

// Fetch and display leaderboard
function fetchLeaderboard() {
    database.ref("wordleLeaderboard").orderByChild("guesses").limitToFirst(100).once("value", (snapshot) => { // Order by guesses (lower is better)
        const scores = [];
        snapshot.forEach((childSnapshot) => {
            scores.push(childSnapshot.val());
        });

        // Sort by guesses (ascending) then by time (ascending) for ties
        scores.sort((a, b) => {
            if (a.guesses !== b.guesses) {
                return a.guesses - b.guesses;
            }
            return a.time - b.time;
        });

        leaderboardList.innerHTML = ""; // Clear existing list

        if (scores.length === 0) {
            leaderboardList.innerHTML = "<li>Aucun score dans le classement pour l'instant.</li>";
            return;
        }

        scores.forEach((score, index) => {
            const li = document.createElement("li");
            const date = new Date(score.timestamp).toLocaleString("fr-FR");
            li.innerHTML = `
                <span class="player-name">#${index + 1} ${score.name}</span>
                <span class="score-info">
                    Tentatives: ${score.guesses}<br>
                    Temps: ${score.time}s<br>
                    ${date}
                </span>
            `;
            leaderboardList.appendChild(li);
        });
        showLeaderboard();
    }, (errorObject) => {
        showMessage("Erreur lors de la récupération du classement: " + errorObject.code, "red");
        console.error("Firebase read error:", errorObject);
    });
}

function showLeaderboard() {
    leaderboardDiv.style.display = "block";
}

function hideLeaderboard() {
    leaderboardDiv.style.display = "none";
}

// --- Event Listeners ---

submitBtn.addEventListener("click", () => {
    const guess = input.value.trim().toUpperCase();
    if (!checkGuess(guess)) return;

    updateGrid(guess);
    currentGuessCount++;
    input.value = "";
    input.focus();

    if (guess === answer) {
        winGame();
    } else if (currentGuessCount === maxGuesses) {
        loseGame();
    } else {
        showMessage(""); // Clear message
    }
});

restartBtn.addEventListener("click", initializeGame);
submitScoreBtn.addEventListener("click", submitScore);
viewLeaderboardBtn.addEventListener("click", fetchLeaderboard);
hideLeaderboardBtn.addEventListener("click", hideLeaderboard);

// Support Enter key for input
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        submitBtn.click();
    }
});

input.focus();
