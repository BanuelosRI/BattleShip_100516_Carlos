// Create board
console.log("Creating array board");
var board = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
];

// Track ship with global var that is constant
const SHIP = 1;
// Connecting HTML to jQuery
// Create a 10 x 10 table using for loops
$(document).ready(function() {

  // SET UP GAME



  // Make game board
  make_board();

  randomShipPlacement();
  // Track shots fired
  var shotsFired = 0;

  // PLAY GAME

  // Make a shot
  $("td").on("click", function() {

    // Take shot and increment shotsFired
    shotsFired++;
    console.log("Torpedoes shot by user: " + shotsFired);

    // Add torpedoed class to td that was selected by user
    $(this).addClass("torpedoed");

    // Disable the clicked td
    $(this).off();

    // Update html shots fired counter
    $("h2").text("Torpedoes shot by user: " + shotsFired);

  })

});




// FUNCTIONS //

function make_board() {
  console.log("Creating html board ");

  $("h2").text("Torpedoes shot by user: 0");

  // This for loop creates the 10 table rows
  var html_board = "";
  for(tableRow = 0; tableRow < 10; tableRow++) {
    html_board = html_board + "<tr>";

    // this for loop creates the 10 table data inside the table rows (tr)
    for(tableData = 0; tableData < 10; tableData++) {
      html_board = html_board + "<td id=" + tableRow + tableData + "></td>";
    }

   //this var 'html' includes everything the loops did and closes the tr.
    html_board = html_board + "</tr>";
  }
  // this appends everything the lopps did and adds it the the <table>
  $("table").html(html_board);

  // Loop five times

}

function randomShipPlacement() {
  var boardRow;
  var boardColumn;
  var shipsOnBoard = 0;
  while (shipsOnBoard < 5) {
    boardRow = Math.floor((Math.random() * 10));
    boardColumn = Math.floor((Math.random() * 10));
    if (board[boardRow][boardColumn] != SHIP) {
      board[boardRow][boardColumn] = SHIP;
      shipsOnBoard++;
    }
  }
  console.log(board);
  // Save ship
  // $("#" + random_ship).addClass("ship");
}
