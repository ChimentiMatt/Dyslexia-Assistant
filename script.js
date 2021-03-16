// Makes an array of the alphabet 
let alphanumeric = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a",
"b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4",
"5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "8", "(", ")",
"-", "=", ",", ".", ";", "'", ":", "—", "?", '\”',, '\'', '\“', '’', "<", ">" ]
 
// let alphanumeric = ['A', ' \" ', 's', '\”']


function dyslexiaConverter() {
    let initialText = document.getElementById('inputField').value;
    let convertedText = ''
    let counterNewWord = 0
    // Two Spaces is essentially a new paragraph for most copy and paste
    let twoSpaces = 0
    for (let i in initialText) {
        // Detect if it is a new word then appends the first letter such as "A"
        if (counterNewWord == 0 && twoSpaces != 2){
            convertedText += initialText[i] 
            counterNewWord += 1
            twoSpaces = 0
        // Add a space between words while appending the letter or symbol such as "A p p l e"
        } else if (alphanumeric.includes(initialText[i]) && counterNewWord != 0 && twoSpaces != 2){
            // convertedText += ' ' + initialText[i] 
            convertedText += initialText[i] 
            twoSpaces = 0
        // If it is a new word at multiple spacessuch as "A p p l e     s o u r"
        } else if (initialText[i] == ' ' && twoSpaces != 2){
            convertedText += '\xa0'+ '\xa0'
            counterNewWord += 1
            twoSpaces += 1
        
        } else if (twoSpaces == 2){
            // convertedText += '!!!!'
            convertedText += '<br><br>'       
            convertedText += initialText[i] 
            twoSpaces = 0
        }
    }
    let convertedArray = []
    let word = ""
    let counter = 0
    for (let c in convertedText){
        counter += 1
        if (alphanumeric.includes(convertedText[c]) && convertedText[c] != '\xa0' && counter < convertedText.length ){
            // console.log(convertedText)
            word += convertedText[c]

        }else if (convertedText[c] == '\xa0' && counter -1< convertedText.length ){
            convertedArray.push(word)
            word = ''
            console.log(word)
        } else if ( counter == convertedText.length ){
            word += convertedText[c]
            convertedArray.push(word)
            // console.log(word, 'word')
            console.log(convertedArray, 'test')
        }
}

    // Removes Js's commas that it puts in between items in an array
    convertedArrayParced = convertedArray.join(' ')

    document.getElementById('outputText').innerHTML = convertedArrayParced

    // Shows font size buttons on search
    let showFontBtnIncrease = document.getElementById('fontBtnIncrease')
    showFontBtnIncrease.style.visibility = "visible"
    let showFontBtnDecrease = document.getElementById('fontBtnDecrease')
    showFontBtnDecrease.style.visibility = "visible"


    // Shows font weight buttons on search
    let showFontWIncrease = document.getElementById('fontWIncrease')
    showFontWIncrease.style.visibility = "visible"
    let showFontWeight = document.getElementById('fontWeight')
    showFontWeight.style.visibility = "visible"
    let showFontWDecrease = document.getElementById('fontWDecrease')
    showFontWDecrease.style.visibility = "visible"


    // Shows background color on search and its border
    let showBackgroundModes = document.getElementById('backgroundModes')
    showBackgroundModes.style.visibility = "visible"
    let showDarkMode = document.getElementById('darkMode')
    showDarkMode.style.visibility = "visible"
    let showLightMode = document.getElementById('lightMode')
    showLightMode.style.visibility = "visible"
    let showReaderMode = document.getElementById('readerMode')
    showReaderMode.style.visibility = "visible"

    // Shows Border Top of Text on search
    let showBorderTop = document.getElementById('outputText')
    showBorderTop.style.visibility = 'visible'
}



// Clears the text field, input field, size button and weight button
function clearConverter() {
    // clears the text field
    let convertedText = document.getElementById('inputField').value;
    convertedText = ''
    document.getElementById('outputText').innerHTML = convertedText

    // clears the input field
    document.getElementById('inputField').value = ''

    // hides font size buttons on clear
    let hideFontBtnIncrease = document.getElementById('fontBtnIncrease')
    hideFontBtnIncrease.style.visibility = "hidden"
    let hideFontBtnDecrease = document.getElementById('fontBtnDecrease')
    hideFontBtnDecrease.style.visibility = "hidden"

    // hides font weight buttons on clear
    let showFontWIncrease = document.getElementById('fontWIncrease')
    showFontWIncrease.style.visibility = "hidden"
    let showFontWDecrease = document.getElementById('fontWDecrease')
    showFontWDecrease.style.visibility = "hidden"
    let showFontWeight = document.getElementById('fontWeight')
    showFontWeight.style.visibility = "hidden"

    // Hides background color on search and its border
    let showBackgroundModes = document.getElementById('backgroundModes')
    showBackgroundModes.style.visibility = "hidden"
    let showDarkMode = document.getElementById('darkMode')
    showDarkMode.style.visibility = "hidden"
    let showLightMode = document.getElementById('lightMode')
    showLightMode.style.visibility = "hidden"
    let showReaderMode = document.getElementById('readerMode')
    showReaderMode.style.visibility = "hidden"


    // Hides Border Top of Text on search
    let showBorderTop = document.getElementById('outputText')
    showBorderTop.style.visibility = 'hidden'
}

// Adjust font size 
let fontSize = 20
let lineHeight = 35
function increaseSize() {
    document.getElementById("outputText").style.fontSize = `${fontSize + 5}px`;
    document.getElementById("outputText").style.lineHeight = `${lineHeight + 5}px`;
    fontSize += 5
    lineHeight += 5
}

function decreaseSize() {

    document.getElementById("outputText").style.fontSize = `${fontSize - 5}px`;
    document.getElementById("outputText").style.lineHeight = `${lineHeight - 5}px`;
    fontSize -= 5
    lineHeight -= 5
}

// Adjust font weight 
let fontW = 400
function increaseWeight() {
    // there is no font for 500, so it skips this math and the user doesnt know
    if (fontW == 400) {
        fontW = 500
        console.log(fontW)
    }
    // If the user is at the max available font weight, it keeps the math at 800
    else if (fontW == 800) {
        fontW -= 100 
    }
    document.getElementById("outputText").style.fontWeight = `${fontW + 100}`;
    fontW += 100
}

function decreaseWeight() {
    // there is no font for 500, so it skips this math and the user doesnt know
    if (fontW == 600) {
        fontW = 500
    }
    // If the user is at the max available font weight, it keeps the math at 200
    else if (fontW == 200) {
        fontW += 100 
    }

    document.getElementById("outputText").style.fontWeight = `${fontW - 100}`;
    fontW -= 100
}


function darkMode(){
    document.body.style.background = '#212121';

    // Changes all P tages to white
    document.querySelectorAll('p').forEach(e => e.style.color = "white");

    // Changes font awsome icons and background to black or white
    document.querySelectorAll('button').forEach(e => e.style.color = "white");
    document.getElementById("fontBtnIncrease").style.background = '#212121';
    document.getElementById("fontBtnDecrease").style.background = '#212121';
    document.getElementById("fontSizeP").style.background = '#212121';
    document.getElementById("fontWIncrease").style.background = '#212121';
    document.getElementById("fontWDecrease").style.background = '#212121';
    document.getElementById("fontWeightP").style.background = '#212121';

    // Changes font awsome labels white
    document.getElementById("fontSizeP").style.color = 'white'
    document.getElementById("fontWeightP").style.color = 'white'
    document.getElementById("backgroundColor").style.color = 'white';

    // Changes font awesome labels backgrounds to black
    document.getElementById("backgroundColor").style.background = '#212121';
    document.getElementById("lightMode").style.background = '#212121';
    document.getElementById("readerMode").style.background = '#1287a8';

    // Changes main header to black    
    document.querySelectorAll('h1').forEach(e => e.style.color = "white");   
    
    //Changes paragraph header to white
    document.getElementById('outputText').style.borderTopColor = "white"

    //Changes a tags colors 
    document.getElementById('currentPage').style.color = "white"
    document.getElementById('writingUrl').style.color = "white"
}


function lightMode(){
    document.body.style.background = 'white';
    // Changes all P tages to near balck
    document.querySelectorAll('p').forEach(e => e.style.color = 'rgb(33, 33, 33)');

    // Changes font awsome icons to black or background to white
    document.getElementById("fontWIncrease").style.color = 'rgb(33, 33, 33)';
    document.getElementById("fontWDecrease").style.color = 'rgb(33, 33, 33)';
    document.getElementById("fontBtnIncrease").style.color = 'rgb(33, 33, 33)';
    document.getElementById("fontBtnDecrease").style.color = 'rgb(33, 33, 33)';
    document.getElementById("fontBtnIncrease").style.background = 'white';
    document.getElementById("fontBtnDecrease").style.background = 'white';
    document.getElementById("fontWIncrease").style.background = 'white';
    document.getElementById("fontWDecrease").style.background = 'white';


    // Changes main header to black
    document.querySelectorAll('h1').forEach(e => e.style.color = "rgb(33, 33, 33)");   

    // Changes font awesome labels to white
    document.getElementById("fontSizeP").style.color = 'rgb(33, 33, 33)'
    document.getElementById("fontWeightP").style.color = 'rgb(33, 33, 33)'
    
    // Changes font awesome labels backgrounds to white
    document.getElementById("fontSizeP").style.background = 'white';
    document.getElementById("fontWeightP").style.background = 'white';
    document.getElementById("backgroundColor").style.color = 'rgb(33, 33, 33)';
    document.getElementById("backgroundColor").style.background = 'white';

    //Changes a tags colors 
    document.getElementById('currentPage').style.color = "black"
    document.getElementById('writingUrl').style.color = "black"
}

function readerMode(){
    // Changes background to reader color
    document.body.style.background = 'rgb(243,239,224)';
    // Changes all P tages to near balck
    document.querySelectorAll('p').forEach(e => e.style.color = 'rgb(33, 33, 33)');  

    // Changes font awsome icons to black and fa background to reader
    document.getElementById("fontWIncrease").style.color = 'rgb(33, 33, 33)';
    document.getElementById("fontWDecrease").style.color = 'rgb(33, 33, 33)';
    document.getElementById("fontBtnIncrease").style.color = 'rgb(33, 33, 33)';
    document.getElementById("fontBtnDecrease").style.color = 'rgb(33, 33, 33)';
    document.getElementById("fontBtnIncrease").style.background = 'rgb(243,239,224)';
    document.getElementById("fontBtnDecrease").style.background = 'rgb(243,239,224)';
    document.getElementById("fontSizeP").style.background = 'rgb(243,239,224)';
    document.getElementById("fontWIncrease").style.background = 'rgb(243,239,224)';
    document.getElementById("fontWDecrease").style.background = 'rgb(243,239,224)';
    document.getElementById("fontWeightP").style.background = 'rgb(243,239,224)';
    document.getElementById("backgroundColor").style.background = 'rgb(243,239,224)';
    document.getElementById("darkMode").style.background = 'rgb(243,239,224)';
    document.getElementById("lightMode").style.background = 'rgb(243,239,224)';
    document.getElementById("readerMode").style.background = 'rgb(243,239,224)';
    
    // Changes font awesome labels to black
    document.getElementById("fontWeightP").style.color = 'rgb(33, 33, 33)'
    document.getElementById("fontSizeP").style.color = 'rgb(33, 33, 33)'
    document.getElementById("backgroundColor").style.color = 'rgb(33, 33, 33)';
    
    // Changes main header to black
    document.querySelectorAll('h1').forEach(e => e.style.color = "rgb(33, 33, 33)");   

    //Changes a tags colors 
    document.getElementById('currentPage').style.color = "black"
    document.getElementById('writingUrl').style.color = "black"
}
