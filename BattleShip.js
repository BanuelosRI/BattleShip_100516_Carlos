

//Connecting HTMK to Jquerey
// Create a 10 x 10 table using for loops
$(document).ready(function() {
  var html = "";

  console.log("Creating the 10 X 10 board");
  // This for loop creates the 10 table rows
  for(tableRow = 0; tableRow < 10; tableRow++) {
    html = html + "<tr>";

    // this for loop creates the 10 table data inside the table rows (tr)
    for(tableData = 0; tableData < 10; tableData++) {
      html = html + "<td id=" + tableRow + tableData + "></td>";
    }

   //this var 'html' includes everything the loops did and closes the tr.
    html = html + "</tr>";
  }
  // this appends everything the lopps did and adds it the the <table>
  $("table").append(html);
});
