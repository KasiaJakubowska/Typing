const spnText = document.querySelector('.text');
const txt = 'Buddy, youre a boy, make a big noise
Playing in the street, gonna be a big man someday
You got mud on your face, you big disgrace
Kicking your can all over the place, singin
We will, we will rock you
We will, we will rock you
Buddy, youre a young man, hard man
Shouting in the street, gonna take on the world someday
You got blood on your face, you big disgrace
Waving your banner all over the place
We will, we will rock you, sing it!
We will, we will rock you, yeah'

let indexText = 0;
const time = 40;

const addLetter = () => {
spnText.textContent += txt[indexText];
indexText++;
if (indexText === txt.length) clearInterval
(indexTyping);

}

const indexTyping = setInterval(addLetter, time);