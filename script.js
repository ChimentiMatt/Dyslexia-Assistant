//Makes an array of the alphabet 
let alphanumeric = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a",
"b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4",
"5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "8", "(", ")",
"-", "=", ",", ".", ";", "'", ":", "—" ]
 
function dyslexiaConverter() {
    let initialText = document.getElementById('inputField').value;
    let convertedText = ''
    let counterNewWord = 0
    for (let i in initialText) {
        if (counterNewWord == 0){
            convertedText += initialText[i] 
            counterNewWord += 1
        } else if (alphanumeric.includes(initialText[i]) && counterNewWord != 0){
            convertedText += ' ' + initialText[i] 
        } else if (initialText[i] == ' '){
            convertedText += '\xa0'+ '\xa0'+ '\xa0' + '\xa0'+ '\xa0'+ '\xa0'

            counterNewWord = 0
        }
    }
    document.getElementById('outputText').innerHTML = convertedText

    // Shows font buttons on search
    let showFontBtnIncrease = document.getElementById('fontBtnIncrease')
    showFontBtnIncrease.style.visibility = "visible"
    let showFontBtnDecrease = document.getElementById('fontBtnDecrease')
    showFontBtnDecrease.style.visibility = "visible"
    let showFontText = document.getElementById('fontSizeP')
    showFontText.style.visibility = "visible"
}



// Clears the text field and input field
function clearConverter() {
    // clears the text field
    let convertedText = document.getElementById('inputField').value;
    convertedText = ''
    document.getElementById('outputText').innerHTML = convertedText

    // clears the input field
    document.getElementById('inputField').value = ''

    // hides font buttons on clear
    let hideFontBtnIncrease = document.getElementById('fontBtnIncrease')
    hideFontBtnIncrease.style.visibility = "hidden"
    let hideFontBtnDecrease = document.getElementById('fontBtnDecrease')
    hideFontBtnDecrease.style.visibility = "hidden"
    let hideFontText = document.getElementById('fontSizeP')
    hideFontText.style.visibility = "hidden"
}

let counter = 0
function increaseSize() {
    if (counter === 0){
        document.getElementById("outputText").style.fontSize = "larger";
        counter += 1
    } else if (counter === 1) { 
        document.getElementById("outputText").style.fontSize = "xx-large";
        counter = 0
        }
}

function decreaseSize() {
    if (counter === 0){
        document.getElementById("outputText").style.fontSize = "small";
        counter += 1
        console.log(document.getElementById("outputText").style.fontSize)
    } else if (counter === 1){ 
        document.getElementById("outputText").style.fontSize = "x-small";
        counter = 0
        console.log(document.getElementById("outputText").style.fontSize)
     }
}

