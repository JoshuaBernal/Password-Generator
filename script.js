var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
    "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";",
    "<", ">", ".", "?", "/"];
var combinedLN = letters.concat(numbers);
var combinedLS = letters.concat(symbols);
var combinedALL = letters.concat(numbers.concat(symbols));
var copiedToast = document.getElementById("copied-toast");
var passwordOne = document.getElementById("pass1");
var passwordTwo = document.getElementById("pass2");
var numberCheckbox = document.getElementById("toggleNumbers");
var symbolCheckbox = document.getElementById("toggleSymbols");
var passwordLength = 15;
var characterPool = letters;
console.log(characterPool);
function genPass() {
    var lengthInputElem = document.getElementById("lengthInput");
    var lengthInputVal = lengthInputElem && lengthInputElem.value ? parseInt(lengthInputElem.value, 10) : 15;
    var numberChecked = numberCheckbox ? numberCheckbox.checked : false;
    var symbolChecked = symbolCheckbox ? symbolCheckbox.checked : false;
    function getCharacterPool() {
        if (numberChecked && symbolChecked)
            return combinedALL;
        if (numberChecked && !symbolChecked)
            return combinedLN;
        if (!numberChecked && symbolChecked)
            return combinedLS;
        return letters;
    }
    characterPool = getCharacterPool();
    if (isNaN(lengthInputVal)) {
        lengthInputVal = 15;
    }
    if (lengthInputVal < 8) {
        alert("The minimum password length is 8.");
    }
    else if (lengthInputVal > 30) {
        alert("The maximum password length is 30.");
    }
    else if (passwordOne && passwordTwo) {
        passwordLength = lengthInputVal;
        passwordOne.textContent = "";
        passwordTwo.textContent = "";
        for (var i = 0; i < passwordLength; i++) {
            var pass1value = Math.floor(Math.random() * characterPool.length);
            passwordOne.textContent += characterPool[pass1value];
        }
        for (var i = 0; i < passwordLength; i++) {
            var pass2value = Math.floor(Math.random() * characterPool.length);
            passwordTwo.textContent += characterPool[pass2value];
        }
    }
    return passwordLength;
}
function copyFirstPass() {
    var _a;
    if (passwordOne && copiedToast) {
        navigator.clipboard.writeText((_a = passwordOne.textContent) !== null && _a !== void 0 ? _a : "");
        copiedToast.className = "show";
        setTimeout(function () { copiedToast.className = copiedToast.className.replace("show", ""); }, 3000);
    }
}
function copySecondPass() {
    var _a;
    if (passwordTwo && copiedToast) {
        navigator.clipboard.writeText((_a = passwordTwo.textContent) !== null && _a !== void 0 ? _a : "");
        copiedToast.className = "show";
        setTimeout(function () { copiedToast.className = copiedToast.className.replace("show", ""); }, 3000);
    }
}
