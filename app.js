const buttonElement = document.getElementById('change-name');
const fontButtonElement = document.getElementById('change-font')

const input = document.getElementById('user-input');
const pInput = document.getElementById('pronoun-input');
const colorInput = document.getElementById('color-input');

const changeCounter = document.getElementById('counter');
const myName = document.getElementById('name')
const bgColor = document.getElementById('bg-color');

let counter = 0;
let lastName = '';

let changedFont = false;
const origFont = myName.style.fontFamily;

buttonElement.addEventListener('click', () => {

    const usersName = input.value;
    const usersPronouns = pInput.value;
    const colorChoice = colorInput.value;
    
    if(usersName != lastName && usersName != ''){
        counter ++;
        console.log(counter);
        myName.textContent = usersName;
        if(usersPronouns != ''){
            myName.textContent += (" (" + usersPronouns + ")");
        }
        changeCounter.textContent = ('you have changed me ' + counter + ' times!');
        lastName = myName.textContent;
        console.log(colorChoice);
        bgColor.style.background = colorChoice;
    }
    

});

fontButtonElement.addEventListener('click', () => {
    counter ++;
    if(!changedFont){
        myName.style.fontFamily = "Dancing Script";
        changedFont = true;
    }
    else{
        myName.style.fontFamily = origFont;
        changedFont = false;
    }

});