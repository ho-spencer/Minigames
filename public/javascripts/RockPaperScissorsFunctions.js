/*========================================================
    Helper Functions for Rock, Paper, Scissors Game
========================================================*/

/*
    NPC Selection
        - function to randomize npc's selection between rock, paper, and scissors
*/
function npcSelection() {
    let choice = Math.floor(Math.random() * 3 + 1);     // random number between 1-3

    switch (choice) {
        // 1 = npc chooses rock
        case 1:
            npcChoices.classList.add("rock");
            npcRock.classList.add("selected");
            break;
        // 2 = npc chooses paper
        case 2:
            npcChoices.classList.add("paper");
            npcPaper.classList.add("selected");
            break;
        // 3 = npc chooses scissors
        case 3:
            npcChoices.classList.add("scissors");
            npcScissors.classList.add("selected");
            break;
        // remove any added classes used to determine NPC play choice and background highlight color
        default:
            npcChoices.classList.remove("rock", "paper", "scissors");
            npcRock.classList.remove("selected");
            npcPaper.classList.remove("selected");
            npcScissors.classList.remove("selected");
    }
}

/*
    Reset Selections
        - set player selection boolean to false (p1Played)
        - remove player choice from class list
        - remove selected class (remove highlighted selection)
        - remove colored title showing round winner/loser
*/
function resetSelections() {
    p1Played = false;
    
    choice = 0;             // reset npc choice (no selection)

    p1Choices.classList.remove("rock", "paper", "scissors");
    npcChoices.classList.remove("rock", "paper", "scissors");
    
    p1Rock.classList.remove("selected");
    npcRock.classList.remove("selected");
    p1Paper.classList.remove("selected");
    npcPaper.classList.remove("selected");
    p1Scissors.classList.remove("selected");
    npcScissors.classList.remove("selected");

    player1Title.classList.remove("green", "red", "yellow");
    npcTitle.classList.remove("green", "red", "yellow");
}

/*
    Reset Game
        - reset player selections
        - reset score and score display back to 0
*/
function resetGame() {
    resetSelections();
    p1Score = 0;
    npcScore = 0;
    p1Span.innerText = 0;
    npcSpan.innerText = 0;
    winnerDisplay.innerText = "";
    isGameOver = false;
}

/*
    Target Rounds Reached
        - function ran when number of rounds needed to win is reached by either player
        - displays winnner
*/
function targetRoundsReached() {
        isGameOver = true;
        winnerText = (p1Score == targetRoundsInt) ? "Player 1 wins" : "NPC Wins";
        winnerDisplay.innerText = winnerText;
}

/*
    Update P1/P2 Score and Score Display
*/
function updateP1Score() {
    p1Score += 1;
    p1Span.innerText = p1Score;
    player1WinsColor()
}

function updateNPCScore() {
    npcScore += 1;
    npcSpan.innerText = npcScore;
    npcWinsColor();
}

/*
    Update player title color based on round winner
*/
function player1WinsColor() {
    player1Title.classList.add("green");
    npcTitle.classList.add("red");
}

function npcWinsColor() {
    player1Title.classList.add("red");
    npcTitle.classList.add("green");
}

function tieColor() {
    player1Title.classList.add("yellow");
    npcTitle.classList.add("yellow");
}