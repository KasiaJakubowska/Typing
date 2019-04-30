const spnText = document.querySelector('.text');
const txt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod sodales ex ut ullamcorper. Sed sit amet porttitor purus. Donec id accumsan justo, tristique elementum lacus. Mauris a odio eu est tempus maximus. Donec risus diam, euismod id placerat et, ullamcorper vel orci.'

let indexText = 0;
const time = 40;

const addLetter = () => {
spnText.textContent += txt[indexText];
indexText++;
if (indexText === txt.length) clearInterval
(indexTyping);

}

const indexTyping = setInterval(addLetter, time);