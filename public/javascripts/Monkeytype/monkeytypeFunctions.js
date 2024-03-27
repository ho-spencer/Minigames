/*
    Pressed Color
        A key on the keyboard display will flash to match key pressed on keyboard. (toggle on, on press)
        
        - add class name for styling
        - using switch statement to only change background of key being pressed
*/
function pressedColor(code) {
    switch (code) {
        // ROW 1
        case "Digit1": {
            div1.classList.add("pressed-color");
            break;
        }
        case "Digit2": {
            div2.classList.add("pressed-color");
            break;
        }
        case "Digit3": {
            div3.classList.add("pressed-color");
            break;
        }
        case "Digit4": {
            div4.classList.add("pressed-color");
            break;
        }
        case "Digit5": {
            div5.classList.add("pressed-color");
            break;
        }
        case "Digit6": {
            div6.classList.add("pressed-color");
            break;
        }
        case "Digit7": {
            div7.classList.add("pressed-color");
            break;
        }
        case "Digit8": {
            div8.classList.add("pressed-color");
            break;
        }
        case "Digit9": {
            div9.classList.add("pressed-color");
            break;
        }
        case "Digit0": {
            div0.classList.add("pressed-color");
            break;
        }
        case "Minus": {
            divMinus.classList.add("pressed-color");
            break;
        }

        // ROW 2
        case "KeyQ": {
            divQ.classList.add("pressed-color");
            break;
        }
        case "KeyW": {
            divW.classList.add("pressed-color");
            break;
        }
        case "KeyE": {
            divE.classList.add("pressed-color");
            break;
        }
        case "KeyR": {
            divR.classList.add("pressed-color");
            break;
        }
        case "KeyT": {
            divT.classList.add("pressed-color");
            break;
        }
        case "KeyY": {
            divY.classList.add("pressed-color");
            break;
        }
        case "KeyU": {
            divU.classList.add("pressed-color");
            break;
        }
        case "KeyI": {
            divI.classList.add("pressed-color");
            break;
        }
        case "KeyO": {
            divO.classList.add("pressed-color");
            break;
        }
        case "KeyP": {
            divP.classList.add("pressed-color");
            break;
        }
        case "BracketLeft": {
            divBL.classList.add("pressed-color");
            break;
        }

        case "BracketRight": {
            divBR.classList.add("pressed-color");
            break;
        }


        // ROW 3
        case "KeyA": {
            divA.classList.add("pressed-color");
            break;
        }
        case "KeyS": {
            divS.classList.add("pressed-color");
            break;
        }
        case "KeyD": {
            divD.classList.add("pressed-color");
            break;
        }
        case "KeyF": {
            divF.classList.add("pressed-color");
            break;
        }
        case "KeyG": {
            divG.classList.add("pressed-color");
            break;
        }
        case "KeyH": {
            divH.classList.add("pressed-color");
            break;
        }
        case "KeyJ": {
            divJ.classList.add("pressed-color");
            break;
        }
        case "KeyK": {
            divK.classList.add("pressed-color");
            break;
        }
        case "KeyL": {
            divL.classList.add("pressed-color");
            break;
        }

        // ROW 4
        case "KeyZ": {
            divZ.classList.add("pressed-color");
            break;
        }
        case "KeyX": {
            divX.classList.add("pressed-color");
            break;
        }
        case "KeyC": {
            divC.classList.add("pressed-color");
            break;
        }
        case "KeyV": {
            divV.classList.add("pressed-color");
            break;
        }
        case "KeyB": {
            divB.classList.add("pressed-color");
            break;
        }
        case "KeyN": {
            divN.classList.add("pressed-color");
            break;
        }
        case "KeyM": {
            divM.classList.add("pressed-color");
            break;
        }

        // ROW 5
        case "Space": {
            divSpace.classList.add("pressed-color");
            break;
        }

        default: {
            console.log(`${code} not set`);
        }
    }
}

/*
    Released Color
        A key on the keyboard display will flash to match key pressed on keyboard. (toggle off, on release)
        
        - remove class name for styling
        - switch statement so releasing one key doesn't remove background color of another key (old version)
*/
function releasedColor(code) {
    switch (code) {
        // ROW 1
        case "Digit1": {
            div1.classList.remove("pressed-color");
            break;
        }
        case "Digit2": {
            div2.classList.remove("pressed-color");
            break;
        }
        case "Digit3": {
            div3.classList.remove("pressed-color");
            break;
        }
        case "Digit4": {
            div4.classList.remove("pressed-color");
            break;
        }
        case "Digit5": {
            div5.classList.remove("pressed-color");
            break;
        }
        case "Digit6": {
            div6.classList.remove("pressed-color");
            break;
        }
        case "Digit7": {
            div7.classList.remove("pressed-color");
            break;
        }
        case "Digit8": {
            div8.classList.remove("pressed-color");
            break;
        }
        case "Digit9": {
            div9.classList.remove("pressed-color");
            break;
        }
        case "Digit0": {
            div0.classList.remove("pressed-color");
            break;
        }
        case "Minus": {
            divMinus.classList.remove("pressed-color");
            break;
        }

        // ROW 2
        case "KeyQ": {
            divQ.classList.remove("pressed-color");
            break;
        }
        case "KeyW": {
            divW.classList.remove("pressed-color");
            break;
        }
        case "KeyE": {
            divE.classList.remove("pressed-color");
            break;
        }
        case "KeyR": {
            divR.classList.remove("pressed-color");
            break;
        }
        case "KeyT": {
            divT.classList.remove("pressed-color");
            break;
        }
        case "KeyY": {
            divY.classList.remove("pressed-color");
            break;
        }
        case "KeyU": {
            divU.classList.remove("pressed-color");
            break;
        }
        case "KeyI": {
            divI.classList.remove("pressed-color");
            break;
        }
        case "KeyO": {
            divO.classList.remove("pressed-color");
            break;
        }
        case "KeyP": {
            divP.classList.remove("pressed-color");
            break;
        }
        case "BracketLeft": {
            divBL.classList.remove("pressed-color");
            break;
        }

        case "BracketRight": {
            divBR.classList.remove("pressed-color");
            break;
        }


        // ROW 3
        case "KeyA": {
            divA.classList.remove("pressed-color");
            break;
        }
        case "KeyS": {
            divS.classList.remove("pressed-color");
            break;
        }
        case "KeyD": {
            divD.classList.remove("pressed-color");
            break;
        }
        case "KeyF": {
            divF.classList.remove("pressed-color");
            break;
        }
        case "KeyG": {
            divG.classList.remove("pressed-color");
            break;
        }
        case "KeyH": {
            divH.classList.remove("pressed-color");
            break;
        }
        case "KeyJ": {
            divJ.classList.remove("pressed-color");
            break;
        }
        case "KeyK": {
            divK.classList.remove("pressed-color");
            break;
        }
        case "KeyL": {
            divL.classList.remove("pressed-color");
            break;
        }

        // ROW 4
        case "KeyZ": {
            divZ.classList.remove("pressed-color");
            break;
        }
        case "KeyX": {
            divX.classList.remove("pressed-color");
            break;
        }
        case "KeyC": {
            divC.classList.remove("pressed-color");
            break;
        }
        case "KeyV": {
            divV.classList.remove("pressed-color");
            break;
        }
        case "KeyB": {
            divB.classList.remove("pressed-color");
            break;
        }
        case "KeyN": {
            divN.classList.remove("pressed-color");
            break;
        }
        case "KeyM": {
            divM.classList.remove("pressed-color");
            break;
        }

        // ROW 5
        case "Space": {
            divSpace.classList.remove("pressed-color");
            break;
        }

        default: {
            console.log(`${code} not set`);
        }
    }
}


/*
    Random Word List()
        Generate a random array of word or words.

        - words generated is from pre-set array of words (wordsList.js)
            - random number generated
            - number is used to choose word in wordsList array and add to randomWords array
        - numWords
            - parameter to determine number of words to generate
            - default is 10
        - return a single string of all the words from the array, separated by a space
*/
function randomWordList(wordArr, numWords = 10) {

    const randomWords = new Array(numWords - 1);
    const wordListLength = wordArr.length - 1;
    
    for (let i = 0; i <= randomWords.length - 1; i++) {
        const wordNum = Math.floor(Math.random() * wordListLength);
        randomWords[i] = wordArr[wordNum];
    }

    return randomWords.join(' ');
}