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