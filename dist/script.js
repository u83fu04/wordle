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
    "CALME", "DROLE", "VERRE", "COEUR", "DOUTE", "PAYER", "FAUTE", "SINON", "BOIRE", "ANNEE", "LIVRE", "SUJET", "MORTE", "DINER", "CHOIX", "ORDRE", "PHOTO", "TIRER", "MARCH", "COMME", "VOTRE", "CETTE", "QUAND", "MERCI", "AVOIR", "AUTRE", "TEMPS", "NOTRE", "MONDE", "PLACE", "PEINE", "FEMME", "PORTE", "CHOSE", "VENIR", "JUSTE", "APRES", "PLEIN", "ENFIN", "GARDE", "VIVRE", "CAUSE", "TERRE", "PARMI", "SELON", "JEUNE", "ABOIS", "ADIEU", "AIDEE", "AIDER", "AGEES", "AGACE", "AGILE", "AINES", "AIPSE", "AIRES", "ALGUE", "ALLER", "ALLEU", "AMANT", "AMERS", "AMOUR", "ANTRE", "APTES", "ARGOT", "APRÈS", "ARBRE", "ASTER", "AUBEL", "AUCUN", "AULNE", "AUREL", "AUSSI", "AUTEL", "AUTRE", "AVANT", "AVION", "AVOIR", "AVRIL", "AIRES", "AÏEUL", "ACIER", "AINSI", "AMOUR", "ASSEZ", "ATOME", "ATLAS", "AVALE", "AVOUE", "AYANT", "AZOTE", "BACON", "BAUME", "BAULE", "BALLE", "BASES", "BATIR", "BEBES", "BELAU", "BEIGE", "BELLE", "BERET", "BIENS", "BETES", "BETON", "BIJOU", "BISOU", "BIÈRE", "BLANC", "BLASE", "BLASÉ", "BLAUE", "BLEUE", "BLOND", "BORNE", "BOTTE", "BOUTE", "BRIDE", "BOÎTE", "BRUME", "BÂTON", "BULBE", "CADET", "CAFES", "CALES", "CALOT", "CAMP", "CAPOT", "CASES", "CAUSE", "CEDRE", "CHAUD", "CHEVAL", "CHERI", "CHIEN", "CHOSE", "COLLE", "COMME", "CORPS", "COUPE", "CRUEL", "CALME", "CARRÉ", "CARTE", "CASSÉ", "CLAIR", "CLOSE", "CLEFS", "COPIE", "CORDE", "COGNE", "COURS", "COURU", "COURT", "CRÉER", "CURIE", "CRABE", "CREER", "CRUES", "CREUX", "CROIT", "CROSS", "DAMAS", "DEHOR", "DEVIE", "DOIGT", "DROIT", "DUALE", "DEPIT", "DEPOT", "DEGEL", "DÉBUT", "DÉCOR", "DANSE", "DEGRÉ", "DENTS", "DOGME", "DORES", "DOTER", "DONNÉ", "DÉBIT", "DÉCÈS", "DURER", "EGARE", "ELITE", "ENCORE", "ENTRE", "ENVIE", "EPAVE", "EPEES", "EPAIS", "EPATE", "EYLAU", "EFFET", "EXACT", "ÉCRIT", "ÉPELER", "ÉTAGE", "ÉTAIT", "ÉTAPE", "EVADE", "EVITE", "EXCES", "EXIGE", "FADES", "FAIRE", "FERME", "FLEUR", "FLÂNER", "FONCÉ", "FRAIS", "FIGUE", "FEINT", "FEMME", "FERRY", "FERRE", "FILLE", "FILER", "FILMS", "FLOUE", "FLUTE", "FONCE", "FORCE", "FONTE", "FORME", "FOULE", "FOIES", "FUMES", "FORÊT", "FOUL", "FRISE", "FROID", "FRUIT", "FRÈRE", "FRÊLE", "GALET", "GARDER", "GAUCHE", "GAULE", "GAZON", "GELEE", "GENRE", "GILET", "GIVRE", "GRAND", "GRAVE", "GRECS", "GROUPE", "GAMME", "GLACE", "GOUTS", "HABIT", "HANTE", "HEURE", "HIBOU", "HIPPO", "HIVER", "HOTEL", "HOMME", "HERBE", "HURLE", "HUILE", "HUMUS", "HYMNE", "IMAGE", "INTER", "JAMBE", "JEUDI", "JOLIE", "JOUER", "JUSTE", "JUGEE", "JAUNE", "JEUNE", "JESUS", "JETEE", "JETER", "JETON", "JOUET", "JOURS", "JURES", "JURON", "KHANS", "LAQUE", "LARUE", "LAUER", "LAURE", "LAUZE", "LECON", "LIGNE", "LIVRE", "LUNDI", "LUTEA", "LARGE", "LAVER", "LISTE", "LIVRE", "LOURD", "LONGE", "LOGIS", "LOUEE", "LOYAL", "LUEUR", "LUTTE", "MARCHÉ", "MARDI", "MAIRE", "MAULE", "MALIN", "MAMAN", "MERCI", "MILLE", "MATIN", "MENES", "MEULE", "MICHE", "MIEUX", "MINCE", "MOINS", "MOITE", "MOREL", "MONDE", "MORNE", "MÉTAL", "MÉTRO", "MURET", "MYTHE", "NACRE", "NAVIE", "NOTRE", "NOVEL", "NUAGE", "NEIGE", "NEONS", "NICHE", "NORME", "OASIS", "ORAGE", "ORNES", "OBJET", "OCÉAN", "ORDRE", "ORALE", "OUEST", "OSANT", "OXYDE", "PAIRE", "PACTE", "PARTE", "PANSE", "PARLE", "PAUME", "PASSÉ", "PAULE", "PETIT", "PEKIN", "PAUSE", "PAYER", "PAYES", "PHARE", "PHILO", "PIEUX", "PINCE", "PIQUE", "PIRES", "PERDU", "PIEDS", "PISTE", "PIÈCE", "PLACE", "PLANE", "PLEIN", "PLOMB", "POIDS", "PLUIE", "POINT", "PORTE", "PORTER", "POLES", "POLIE", "POULE", "PORES", "POSER", "POSTE", "POUCE", "POÈME", "PRETS", "PREUX", "QUARE", "QUARK", "QUAND", "QUEUE", "QUART", "RANGE", "RATES", "RAYON", "RADIO", "RALES", "RAVIR", "RAVIS", "RAYEE", "RECUE", "REFUS", "REGIE", "REGIS", "REPAS", "RESTE", "RIANT", "RICHE", "RIBOT", "RÊVER", "ROUGE", "ROUGI", "ROUTE", "ROUES", "RUBAN", "RÈGLE", "SACRE", "SAGES", "SALUE", "SALUT", "SAULE", "SAINT", "SAUTÉ", "SALIR", "SALLE", "SEMES", "SEULE", "SIENS", "SIGNE", "SINGE", "SERVE", "SOLEX", "SOUDE", "SOUPE", "SUJET", "SURIN", "SABLE", "SCEAU", "SIÈCLE", "SOINS", "SUCRE", "TAULE", "TARES", "TAXIS", "TEMPS", "TENUE", "TERRE", "TIRER", "TOURE", "TOUSE", "TOUTE", "TROIS", "TABLE", "TEMPE", "TETES", "TIEDE", "TRACE", "TREVE", "TENIR", "TIGES", "TRAIN", "USINE", "VALUE", "VALVE", "VASES", "VENIR", "VIEUX", "VILLE", "VIVRE", "VOTRE", "VOEUX", "VACHE", "VAGUE", "VERBE", "VERRE", "VECUS", "VETUS", "VISSE", "VITAL", "VINGT", "VOILE", "VOTER", "VUTE", "VOGUE", "VOLER", "VRAIE", "VÊTIR", "ZAÏRE", "ZESTE", "ZIPPÉ", "ZÉBRÉ", "CHAOS", "JACOB", "RÈGNE", "ORAGE", "PISSE", "ÉPOUX", "COACH", "ENNUI", "POÈME", "USAGE", "REVUE", "OTAGE", "ROYAL", "TEXTE", "TIGRE", "POUCE", "FRUIT", "POÈTE", "SAVON", "SERRE", "MÉTAL", "JOINT", "CLOWN", "TRÔNE", "SHIRT", "VODKA", "NUAGE", "ÉTUDE", "VOMIR", "PORNO", "JAMIE", "ÉCART", "GRÈVE", "SUBIR", "MÊLER", "RANGE", "VOILE", "HONTE", "ARABE", "BAKER", "BATTE", "BEACH", "BIDON", "CADRE", "CANAL", "CIVIL", "CONNE", "DÉCÈS", "ENGIN", "EXTRA", "FILET", "FOIRE", "GENOU", "LÉGAL", "MAFIA", "MOTIF", "MÉTÉO", "NIQUE", "NIÈCE", "NOYER", "PEARL", "PENNY", "PESTE", "POKER", "POMPE", "PÉTER", "QUÊTE", "SABRE", "SELLE", "SUCER", "TACHE", "TRIBU", "VERTU", "STMPA"
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
