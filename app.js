const buttonElement = document.getElementById('change-name');
const input = document.getElementById('user-input');
const changeCounter = document.getElementById('counter');
const myName = document.getElementById('name')

let counter = 0;
let lastName = '';

buttonElement.addEventListener('click', () => {

    const usersName = input.value;
    
    if(usersName != lastName && usersName != ''){
        counter ++;
        console.log(counter);
        myName.textContent = usersName;
        changeCounter.textContent = ('you have changed me ' + counter + ' times!');
        lastName = myName.textContent;
    }

});