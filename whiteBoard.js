


function randomShipPlacement() {
  var boardRow;
  var boardColumn;
  var shipsOnBoard = 0;

  // Create 5 random rows and 5 random columns.
  while (shipsOnBoard < 5) {
    boardRow = Math.floor((Math.random() * 10));
    boardColumn = Math.floor((Math.random() * 10));

    //Place a ship in the ranomly generated position in the array "board".
    if (board[boardRow][boardColumn] != SHIP) {
      board[boardRow][boardColumn] = SHIP;

      // console.log("The ship is at: " + boardRow + boardColumn);
      console.log("Row " + boardRow);
      console.log("column " + boardColumn);

      // Limit the while loop to 5 iterations
      shipsOnBoard++;
    }
  }
}






const leaveEmpty = -1;


var topRow = boardRow -1;
var bottomRow = boardRow +1;

//checks left and righ
var leftCol = boardColumn -1;
var rightCol = boardColumn +1;

function randomShipPlacement() {

  // //checks up and down
  var boardRow;
  var boardColumn;
  var shipsOnBoard = 0;

  // Create 5 random rows and 5 random columns.
  while (shipsOnBoard < 5) {
    boardRow = Math.floor((Math.random() * 10));
    boardColumn = Math.floor((Math.random() * 10));

  if (board[boardRow][boardColumn] != SHIP && board[boardRow][boardColumn] != leaveEmpty) {
    board[boardRow][boardColumn] = SHIP;
  }
  board[topRow][boardRow] = leaveEmpty;
  board[bottomRow][boardRow] = leaveEmpty;
  board[boardColumn][leftCol] = leaveEmpty;
  board[boardColumn][rightCol] = leaveEmpty;



function rows () {
}

// FUNTION column
