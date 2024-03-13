// variables for elements
const p1Rock = document.querySelector("#p1rock");                   // div containing rock img for p1
const p1Paper = document.querySelector("#p1paper");                 // div containing paper img for p1
const p1Scissors = document.querySelector("#p1scissors");           // div containing scissors img for p1

const npcRock = document.querySelector("#npcRock");                   // div containing rock img for npc
const npcPaper = document.querySelector("#npcPaper");                 // div containing paper img for npc
const npcScissors = document.querySelector("#npcScissors");           // div containing scissors img for npc

const nextRoundButton = document.querySelector("#nextRound");       // button to start next round
const resetGameButton = document.querySelector("#resetGame");       // button to reset game

const selectScore = document.querySelector("#playTo");              // select element
const winnerDisplay = document.querySelector("#winnerDisplay");     // h2 to display winner of game

const player1Title = document.querySelector("#player1Title");       // player 1 title
const npcTitle = document.querySelector("#npcTitle");               // npc title

const p1Choices = document.querySelector("#p1");
const npcChoices = document.querySelector("#npc");

// variables for number of rounds
let targetRounds = selectScore.value;           // set target rounds based on select value
let targetRoundsInt = parseInt(targetRounds);   // convert targetRounds to an integer
let winnerText; 
let isGameOver = false;                         // variable to track if game is in progress / over

// variables for spans (score display)
const p1Span = document.querySelector("#p1Score");
const npcSpan = document.querySelector("#npcScore");

// variable to update score value
let p1Score = 0;
let npcScore = 0;

// track if p1 has played this round
let p1Played = false;

/*
    Select Score Event Listener
        - when target score (number of rounds) is selected
            - set new target score value
            - reset score (if new target score is selected mid game, game resets)
*/
selectScore.addEventListener("change", function() {
    targetRounds = selectScore.value;
    targetRoundsInt = parseInt(targetRounds);
    resetGame();
})

/*
    P1 Event Listener
        - player selection can only be made if
            - p1Played=false (player 1 hasn't played a move/selected a move)
            - 'best of # of rounds' has been selected
            - !isGameOver=false (game is not over -- p1/npc score has not reached target # of rounds for a win)
        - NPC makes selection when user makes selection
        - determine round winner
*/
p1Rock.addEventListener("click", function() {
    
    if (!p1Played && targetRoundsInt > 0 && !isGameOver) {
        p1Choices.classList.add("rock");            // update class to reflect P1's seletion
        p1Rock.classList.add("selected");           // update background color to show selected option

        npcSelection();                             // function to make NPC's selection

        // logic to determine round winner and update score
        if (npcChoices.classList.contains("rock")) {
            tieColor();
        }
        
        if (npcChoices.classList.contains("paper")) {
            updateNPCScore();
        }

        if (npcChoices.classList.contains("scissors")) {
            updateP1Score();
        }

        // target rounds reached - display winner
        if ( (p1Score == targetRoundsInt) || (npcScore == targetRoundsInt) ){
            targetRoundsReached();
        }
    }

    p1Played = true;
})

p1Paper.addEventListener("click", function() {
    
    if (!p1Played && targetRoundsInt > 0 && !isGameOver) {
        p1Choices.classList.add("paper");            // update class to reflect P1's seletion
        p1Paper.classList.add("selected");           // update background color to show selected option

        npcSelection();                             // function to make NPC's selection

        // logic to determine round winner and update score
        if (npcChoices.classList.contains("rock")) {
            updateP1Score();
        }
        
        if (npcChoices.classList.contains("paper")) {
            tieColor();
        }

        if (npcChoices.classList.contains("scissors")) {
            updateNPCScore();
        }

        // target rounds reached - display winner
        if ( (p1Score == targetRoundsInt) || (npcScore == targetRoundsInt) ){
            targetRoundsReached();
        }
    }

    p1Played = true;
})

p1Scissors.addEventListener("click", function() {
    
    if (!p1Played && targetRoundsInt > 0 && !isGameOver) {
        p1Choices.classList.add("scissors");            // update class to reflect P1's seletion
        p1Scissors.classList.add("selected");           // update background color to show selected option

        npcSelection();                                 // function to make NPC's selection

        // logic to determine round winner and update score
        if (npcChoices.classList.contains("rock")) {
            updateNPCScore();
        }
        
        if (npcChoices.classList.contains("paper")) {
            updateP1Score();
        }

        if (npcChoices.classList.contains("scissors")) {
            tieColor();
        }

        // target rounds reached - display winner
        if ( (p1Score == targetRoundsInt) || (npcScore == targetRoundsInt) ){
            targetRoundsReached();
        }
    }

    p1Played = true;
})

// Next Round Setup
nextRoundButton.addEventListener("click", function() {
    if (!isGameOver) {
        resetSelections();
    }
});

// New Game
resetGameButton.addEventListener("click", function() {
    resetGame();
});