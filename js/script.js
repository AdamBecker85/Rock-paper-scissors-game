{
    function playGame(playerInput){

        clearMessages();

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



        const computerMove = getMoveName(Math.floor(Math.random() * 3 + 1));

        printMessage('Ruch komputera to: ' + computerMove);



        const playerMove = getMoveName(playerInput);

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

    }

    document.getElementById('play-rock').addEventListener('click', function(){playGame(1)});
    document.getElementById('play-paper').addEventListener('click', function(){playGame(2)});
    document.getElementById('play-scissors').addEventListener('click', function(){playGame(3)});
}



