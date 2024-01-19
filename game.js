const choices = document.querySelectorAll('.choices button');
const result = document.querySelector('.result');

choices.forEach(choice => {
    choice.addEventListener('click', playGame);
});

function playGame(event) {
    const playerChoice = event.target.id;
    const computerChoice = generateComputerChoice();
    const resultText = determineWinner(playerChoice, computerChoice);
    result.textContent = resultText;
}

function generateComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}
