const spnText = document.querySelector('.text');
const txt = 'Emigrowałem z objęc Twych nad ranem,
Dzień mnie wyganiał, nocą znów wracałem,
Dane nam było, słońca zaćmienie,
Następne będzie, może za sto lat.'

let indexText = 0;
const time = 40;

const addLetter = () => {
spnText.textContent += txt[indexText];
indexText++;
if (indexText === txt.length) clearInterval
(indexTyping);

}

const indexTyping = setInterval(addLetter, time);