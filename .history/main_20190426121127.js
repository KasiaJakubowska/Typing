const spnText = document.querySelector('.text');
const txt = 'Krajał krawiec skórę, na moją posturę. Fastrygował, we worek szył. Tak szył - żem ożył. A do wora - graty i gruz. Kości, krew RH plus. Serce z duszą na ramieniu i duszę do smażenia w piekle na głębokim oleju. Serce mnie bije. Dusza (za)pije. Żyję!'

let indexText = 0;
const time = 40;

const addLetter = () => {
spnText.textContent += txt[indexText];
indexText++;
if (indexText === txt.length) clearInterval
(indexTyping);

}

const indexTyping = setInterval(addLetter, time);