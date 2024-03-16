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