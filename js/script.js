var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamien';
} else if (computerMove == '2') {
    computerMove = 'papier';
} else if (computerMove == '3') {
    computerMove = 'nozyce'
}

printMessage('Mój ruch: ' + computerMove);

var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nozyce'; 
} else {
    printMessage('Bledna liczba. Podaj liczbe od 1 do 3');
    playerMove = 'kamień';
}
printMessage('Twój ruch: ' + playerMove);