const spnText = document.querySelector('.text');
const txt = 'Buddy, youre a boy, make a big noise
Playing in the street, gonna be a big man someday
You got mud on your face'

let indexText = 0;
const time = 40;

const addLetter = () => {
spnText.textContent += txt[indexText];
indexText++;
if (indexText === txt.length) clearInterval
(indexTyping);

}

const indexTyping = setInterval(addLetter, time);