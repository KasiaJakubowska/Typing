const spnText = document.querySelector('.text');
const txt = 'Emigrowałem z objęc Twych nad ranem, dzień mnie wyganiał, nocą znów wracałem, dane nam było, słońca zaćmienie, następne będzie, może za sto lat.'

let indexText = 0;
const time = 40;

const addLetter = () => {
spnText.textContent += txt[indexText];
indexText++;
if (indexText === txt.length) clearInterval
(indexTyping);

}

const indexTyping = setInterval(addLetter, time);