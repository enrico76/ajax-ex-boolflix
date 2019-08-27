console.log("ciao");

// API key
var APIKEY = "4ecca77150719dcc4afd1c3dc1215ed8";
// indirizzo di ricerca
var APIURL = "https://api.themoviedb.org/3";

function searchClick() {
  console.log("sono qui");
  var query = $('#titolo_digit').val();
  console.log(query);

}
function initial() {
  // console.log("init");
  $("#myButton").click(searchClick);

}
$(document).ready(searchClick);
