const dice1 = document.getElementById('dice1'); // Select the first dice element
const dice2 = document.getElementById('dice2'); // Select the second dice element
const rollButton = document.getElementById('roll-button'); // Select the roll button

const backgroundVideo = document.getElementById('background-video');

const rollDice = (diceElement) => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    diceElement.innerText = randomNumber;
};

rollButton.addEventListener('click', () => {
    rollDice(dice1);
    rollDice(dice2);
    backgroundVideo.pause();
});
