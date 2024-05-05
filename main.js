
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
  
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    }else{
      console.log('Wrong choice!');
    }
  };
  
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
  
    switch(randomNumber){
      case 0:
        return 'rock';
        break;
      case 1: 
        return 'paper';
        break;
        case 2:
        return 'scissors';
        break;
    }
  
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice == computerChoice){
      return 'Tied game';
    } 
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'The computer Won!';
      } else {
        return 'You Won';
      }
    }
      if(userChoice === 'paper'){
      if(computerChoice === 'scissors' || computerChoice === 'rock'){
        return 'You Won!';
      } else {
        return 'Computer Won!';
      }
    }
  
    if(userChoice === 'scissor'){
      if(computerChoice === 'paper' || computerChoice === 'rock'){
        return 'The compuer Won!';
      } else {
        return 'You Won';
      }
    }
    if(userChoice === 'bomb'){
      return 'You Won';
    }
  
  }
  
  const playGame = () => {
    let userChoice = getUserChoice('Rock');
    let computerChoice = getComputerChoice();
    console.log('You throw: ' + userChoice);
    console.log('The computer throw: ' + computerChoice);
    return determineWinner(userChoice, computerChoice);
  }
  
  console.log(playGame());