// Function to check if a bingo card will ever get Bingo
function hasBingo(card) {
    const size = 5; // Size of the bingo card (5x5)

    // Function to check for a bingo in a row
    function checkRow(row) {
      for (let col = 0; col < size; col++) {
        if (!card[row][col]) {
          return false;
        }
      }
      return true;
    }

    // Function to check for a bingo in a column
    function checkColumn(col) {
      for (let row = 0; row < size; row++) {
        if (!card[row][col]) {
          return false;
        }
      }
      return true;
    }

    // Function to check for a bingo in the main diagonal
    function checkMainDiagonal() {
      for (let i = 0; i < size; i++) {
        if (!card[i][i]) {
          return false;
        }
      }
      return true;
    }

    // Function to check for a bingo in the secondary diagonal
    function checkSecondaryDiagonal() {
      for (let i = 0; i < size; i++) {
        if (!card[i][size - 1 - i]) {
          return false;
        }
      }
      return true;
    }

    // Check for bingo in rows
    for (let row = 0; row < size; row++) {
      if (checkRow(row)) {
        return true;
      }
    }

    // Check for bingo in columns
    for (let col = 0; col < size; col++) {
      if (checkColumn(col)) {
        return true;
      }
    }

    // Check for bingo in diagonals
    if (checkMainDiagonal() || checkSecondaryDiagonal()) {
      return true;
    }

    // If no bingo is found
    return false;
  }

  // Given list of bingo cards
  const bingoCards = [
    // ... (same as before)
  ];

  // Simulate drawing numbers and find the winning board
  function findWinningBoard(cards, calledNumbers) {
    for (let i = 0; i < cards.length; i++) {
      const board = cards[i];
      const markedNumbers = new Set();

      // Check each number as it is called
      for (let j = 0; j < calledNumbers.length; j++) {
        const calledNumber = calledNumbers[j];
        markedNumbers.add(calledNumber);

        // Check if the board has a bingo
        if (hasBingo(board, markedNumbers)) {
          return i + 1; // Boards are 1-indexed
        }
      }
    }
    return -1; // No winning board found
  }

  // List of called numbers
  const calledNumbers = [7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1];

  // Find the winning board
  const winningBoard = findWinningBoard(bingoCards, calledNumbers);

  // Output the result
  if (winningBoard !== -1) {
    console.log(`Pick Board ${winningBoard} to guarantee a win against the giant squid!`);
  } else {
    console.log("No winning board found against the giant squid.");
  }
