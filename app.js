let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userSc = document.querySelector('#user-score');
const compSc = document.querySelector('#computer-score');

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}
const drawGame = () => {
    msg.innerText = `Try Again!, Game Draw!`;
    msg.style.backgroundColor = 'gray';
}

const showWinner = (userWin, userChoice, comChioce) => {
    if(userWin){
        userScore++;
        msg.innerText = `Your Choice ${userChoice} v/s Computer Choice ${comChioce}. Congratulation!, You Won!`;
        msg.style.backgroundColor = 'green';
        userSc.innerText = userScore;
    } else {
        compScore++;
        msg.innerText = `Your Choice ${userChoice} v/s Computer Choice ${comChioce}. Sorry!, You lose!`;
        msg.style.backgroundColor = 'red';
        compSc.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    console.log('User\'s choice: ', userChoice);
    const comChioce = genCompChoice();
    console.log('Computer\'s choice: ', comChioce);
    if(userChoice === comChioce){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === 'rock'){
            //scissors, paper
            userWin = comChioce === 'paper' ? false : true;
        } else if(userChoice === 'paper'){
            //rock, scissors
            userWin = comChioce === 'scissors' ? false : true;
        } else {
            //rock, paper
            userWin = comChioce === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, comChioce);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})
