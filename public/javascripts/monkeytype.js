const testSpan = document.querySelector("#testSpan");

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


// Event listener for entire window to detect keyboard keydown
window.addEventListener("keydown", function(e) {
    console.log(e);
    testSpan.innerText = e.key;
    pressedColor(e.code);
});

window.addEventListener("keyup", function(e) {
    divQ.classList.remove("pressed-color");
    divW.classList.remove("pressed-color");
    divE.classList.remove("pressed-color");
    divR.classList.remove("pressed-color");
    divT.classList.remove("pressed-color");
    divY.classList.remove("pressed-color");
    divU.classList.remove("pressed-color");
    divI.classList.remove("pressed-color");
    divO.classList.remove("pressed-color");
    divP.classList.remove("pressed-color");
});

function pressedColor(code) {
    switch (code) {
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
        default: {
            console.log(`${code} not set`);
        }
    }
}