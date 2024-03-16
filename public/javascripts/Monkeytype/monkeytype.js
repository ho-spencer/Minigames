const testSpan = document.querySelector("#testSpan");

// Variables for Row 1 divs
const div1 = document.querySelector("#key1");
const div2 = document.querySelector("#key2");
const div3 = document.querySelector("#key3");
const div4 = document.querySelector("#key4");
const div5 = document.querySelector("#key5");
const div6 = document.querySelector("#key6");
const div7 = document.querySelector("#key7");
const div8 = document.querySelector("#key8");
const div9 = document.querySelector("#key9");
const div0 = document.querySelector("#key0");
const divMinus = document.querySelector("#minus");

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

// Event listener for entire window to detect keyboard keydown
window.addEventListener("keydown", function(e) {
    console.log(e);
    testSpan.innerText = e.key;
    pressedColor(e.code);
});

window.addEventListener("keyup", function(e) {
    releasedColor(e.code);
});

