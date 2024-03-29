const typeWords = document.querySelector("#typeWords");
const startRestartButton = document.querySelector("#startRestartButton");


// Variables for Row 1 divs
// const div1 = document.querySelector("#key1");
// const div2 = document.querySelector("#key2");
// const div3 = document.querySelector("#key3");
// const div4 = document.querySelector("#key4");
// const div5 = document.querySelector("#key5");
// const div6 = document.querySelector("#key6");
// const div7 = document.querySelector("#key7");
// const div8 = document.querySelector("#key8");
// const div9 = document.querySelector("#key9");
// const div0 = document.querySelector("#key0");
// const divMinus = document.querySelector("#minus");

// Variables for Row 2 divs
const divQ = document.querySelector("#keyQ");
const divW = document.querySelector("#keyW");
const divE = document.querySelector("#keyE");
const divR = document.querySelector("#keyR");
const divT = document.querySelector("#keyT");
const divY = document.querySelector("#keyY");
const divU = document.querySelector("#keyU");
const divI = document.querySelector("#keyI");
const divO = document.querySelector("#keyO");
const divP = document.querySelector("#keyP");
const divBL = document.querySelector("#bracketLeft");
const divBR = document.querySelector("#bracketRight");

// Variables for Row 3 divs
const divA = document.querySelector("#keyA");
const divS = document.querySelector("#keyS");
const divD = document.querySelector("#keyD");
const divF = document.querySelector("#keyF");
const divG = document.querySelector("#keyG");
const divH = document.querySelector("#keyH");
const divJ = document.querySelector("#keyJ");
const divK = document.querySelector("#keyK");
const divL = document.querySelector("#keyL");

// Variables for Row 4 divs
const divZ = document.querySelector("#keyZ");
const divX = document.querySelector("#keyX");
const divC = document.querySelector("#keyC");
const divV = document.querySelector("#keyV");
const divB = document.querySelector("#keyB");
const divN = document.querySelector("#keyN");
const divM = document.querySelector("#keyM");

// Variables for Row 5 divs
const divSpace = document.querySelector("#space");

let isGameStart = false;

// Variables for generated words for the game
let wordStr;                // single STRING of all words generated - "word1 word2 word3 word4"
let charArr;                // char array of wordStr

// Variables for game
let charNum = 0;                                // iterator for char array
let correctCount = 0;                           // count for number of correct letters typed
let wrongcount = 0;                             // count for number of incorrect letters typed
const typeWordsChildren = typeWords.children;   // collection of the span elements of each letter inside the typeWords span

// Event listener for start button
startRestartButton.addEventListener("click", function(e) {    
    startRestartGame();

    console.log("wordSTR: ", wordStr);              // DEBUG
    console.log("charArr: ", charArr);              // DEBUG
    console.log("GAME STARTED/RESTARTED")           // DEBUG
});

// Event listener for entire window to detect keyboard keydown
window.addEventListener("keydown", function(e) {  
    // keys only work if game is started (isGameStart = true)
    if (isGameStart) {
        console.log(e);         // DEBUG
        pressedColor(e.code);
        
        // Prevent space from pressing start/restart button
        if (e.target === startRestartButton) {
            e.preventDefault();
        }



        if (e.key === charArr[charNum]) {
            keyPressMatchesLetter(e.key);
            
        }
        else {
            wrongKeyPress(e.key);
        }



        
        if (charNum === charArr.length - 1) {
            console.log("END");
            console.log(`CORRECT LETTERS: ${correctCount}`);
            console.log(`WRONG LETTERS: ${wrongcount}`);
        }
    }

    charNum++;
});


window.addEventListener("keyup", function(e) {
    releasedColor(e.code);
});
