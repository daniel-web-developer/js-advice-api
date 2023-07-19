console.log("VIVA CRISTO REY");

const button = document.querySelector('#button');
const number = document.querySelector('#advice-number');
const advice = document.querySelector('#advice');

const url = "https://api.adviceslip.com/advice"

async function getAdvices(){
    const response = await fetch(url, {
        cache: "no-cache"
    });
    const data = await response.json();
    number.innerHTML = "ADVICE #" + (data.slip.id + 1);
    advice.innerHTML = "\"" + data.slip.advice + "\"";
}

getAdvices();

button.addEventListener('click', () => {
    getAdvices();
})
