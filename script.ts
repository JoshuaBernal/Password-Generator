const letters: string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const numbers: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbols: string[] = ["~","`","!","@","#","$","%","^","&","*","(",")",
"_","-","+","=","{","[","}","]",",","|",":",";",
"<",">",".","?","/"]

const combinedLN: string[] = letters.concat(numbers)
const combinedLS: string[] = letters.concat(symbols)
const combinedALL: string[] = letters.concat(numbers.concat(symbols))
const copiedToast: HTMLElement | null = document.getElementById("copied-toast")

let passwordOne: HTMLElement | null = document.getElementById("pass1")
let passwordTwo: HTMLElement | null = document.getElementById("pass2")
let numberCheckbox = document.getElementById("toggleNumbers") as HTMLInputElement | null
let symbolCheckbox = document.getElementById("toggleSymbols") as HTMLInputElement | null

let passwordLength: number = 15
let characterPool: string[] = letters
console.log(characterPool)

function genPass(): number {
    let lengthInputElem = document.getElementById("lengthInput") as HTMLInputElement | null
    let lengthInputVal: number = lengthInputElem && lengthInputElem.value ? parseInt(lengthInputElem.value, 10) : 15
    let numberChecked: boolean = numberCheckbox ? numberCheckbox.checked : false
    let symbolChecked: boolean = symbolCheckbox? symbolCheckbox.checked : false

    function getCharacterPool() {
        if (numberChecked && symbolChecked) return combinedALL
        if (numberChecked && !symbolChecked) return combinedLN
        if (!numberChecked && symbolChecked) return combinedLS
        return letters
    }

    characterPool = getCharacterPool()
    if (isNaN(lengthInputVal)) {
        lengthInputVal = 15;
    }
    
    if (lengthInputVal < 8) {
        alert("The minimum password length is 8.");
    } else if (lengthInputVal > 30) {
        alert("The maximum password length is 30.");
    } else if (passwordOne && passwordTwo) {
        passwordLength = lengthInputVal;
        passwordOne.textContent = ""
        passwordTwo.textContent = ""
        for (let i = 0; i < passwordLength; i++) {
            const pass1value: number = Math.floor(Math.random()*characterPool.length)
            passwordOne.textContent += characterPool[pass1value]
        }
        for (let i = 0; i < passwordLength; i++) {
            const pass2value: number = Math.floor(Math.random()*characterPool.length)
            passwordTwo.textContent += characterPool[pass2value]
        }
    }    

    return passwordLength
}

function copyFirstPass() {
    if (passwordOne && copiedToast) {
        navigator.clipboard.writeText(passwordOne.textContent ?? "")
        copiedToast.className = "show"
        setTimeout(function(){ copiedToast.className = copiedToast.className.replace("show", ""); }, 3000);
    }
}

function copySecondPass() {
    if (passwordTwo && copiedToast) {
        navigator.clipboard.writeText(passwordTwo.textContent ?? "")
        copiedToast.className = "show"
        setTimeout(function(){ copiedToast.className = copiedToast.className.replace("show", ""); }, 3000);
    }
}