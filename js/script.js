function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if (argMoveId == 2){
    return 'papier';
  } else if (argMoveId == 3){
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Ruch komputera to: ' + computerMove);



let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Mój ruch to: ' + playerMove);



function displayResult (argComputerMove,argPlayerMove) {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if ( (argComputerMove == 'kamień' && argPlayerMove == 'papier')||( argComputerMove == 'papier' && argPlayerMove == 'nożyce')||( argComputerMove == 'nożyce' && argPlayerMove == 'kamień') ){
    printMessage('Ty wygrywasz!');
  } else if ( (argComputerMove == 'kamień' && argPlayerMove == 'nożyce')||( argComputerMove == 'papier' && argPlayerMove == 'kamień')||( argComputerMove == 'nożyce' && argPlayerMove == 'papier')) {
    printMessage('Tym razem przegrywasz :(');
  } else if ( (argComputerMove == 'kamień' && argPlayerMove == 'kamień')||( argComputerMove == 'papier' && argPlayerMove == 'papier')||( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') ) {
    printMessage('Remis');
  }

}

displayResult (computerMove,playerMove);



