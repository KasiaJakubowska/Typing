const spnText = document.querySelector('.text');
const txt = 'To brzask na wschodzie a słońcem jest Julia, wzejdź słońce'

let indexText = 0;
const time = 40;

const addLetter = () => {
spnText.textContent += txt[indexText];
indexText++;
if (indexText === txt.length) clearInterval
(indexTyping);

}

const indexTyping = setInterval(addLetter, time);