const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")",
"_","-","+","=","{","[","}","]",",","|",":",";",
"<",">",".","?","/"]

const combinedLN = letters.concat(numbers)
const combinedLS = letters.concat(symbols)
const combinedALL = letters.concat(numbers.concat(symbols))

let passwordOne = document.getElementById("pass1")
let passwordTwo = document.getElementById("pass2")
let numberCheckbox = document.getElementById("toggleNumbers")
let symbolCheckbox = document.getElementById("toggleSymbols")

let passwordLength = 15
let characterPool = letters
console.log(characterPool)

function genPass() {
    let lengthInputVal = document.getElementById("lengthInput").value
    let numberChecked = numberCheckbox.checked
    let symbolChecked = symbolCheckbox.checked

    function getCharacterPool() {
        if (numberChecked && symbolChecked) return combinedALL
        if (numberChecked && !symbolChecked) return combinedLN
        if (!numberChecked && symbolChecked) return combinedLS
        return letters
    }

    characterPool = getCharacterPool()
    if (lengthInputVal === "") {
        lengthInputVal = 15;
    }
    
    if (lengthInputVal < 8) {
        alert("The minimum password length is 8.");
    } else if (lengthInputVal > 30) {
        alert("The maximum password length is 30.");
    } else {
        passwordLength = lengthInputVal;
        passwordOne.textContent = ""
        passwordTwo.textContent = ""
        for (let i = 0; i < passwordLength; i++) {
            pass1value = Math.floor(Math.random()*characterPool.length)
            passwordOne.textContent += characterPool[pass1value]
        }
        for (let i = 0; i < passwordLength; i++) {
            pass2value = Math.floor(Math.random()*characterPool.length)
            passwordTwo.textContent += characterPool[pass2value]
        }
    }    

    return characterPool, passwordLength
}

function copyFirstPass() {
    navigator.clipboard.writeText(passwordOne.textContent)
    alert("First password " + passwordOne.textContent + " copied to clipboard.")
}

function copySecondPass() {
    navigator.clipboard.writeText(passwordTwo.textContent)
    alert("Second password " + passwordTwo.textContent + " copied to clipboard.")
}