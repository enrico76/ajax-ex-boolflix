console.log("ciao");

// API key
// var APIKEY = "4ecca77150719dcc4afd1c3dc1215ed8";
// indirizzo di ricerca
// var APIURL = "https://api.themoviedb.org/3";



function searchClick() {
  console.log("sono qui");
  var query = $('#titolo_digit').val();
  console.log(query);
  movieResult(query);
  tvResult(query);

}

function movieResult(query) {
  $.ajax({
    url: "https://api.themoviedb.org/3/search/movie",
    method: "GET",
    data: {
      api_key: "4ecca77150719dcc4afd1c3dc1215ed8",
      language: "it-IT",
      query: query
    },
    success: function(data) {
      console.log("film output");
      console.log(data);
      var movies = data.results;
      printAdv("movies", movies);
    },
    error: function() {
      alert("errore");
    }
  });
}
function tvResult(query) {
  $.ajax({
    url: "https://api.themoviedb.org/3/search/tv",
    method: "GET",
    data: {
      api_key: "4ecca77150719dcc4afd1c3dc1215ed8",
      language: "it-IT",
      query: query
    },
    success: function(data) {
      console.log("tv output");
      console.log(data);
      var tv = data.results;
      printAdv("tv" , tv);
    },
    error: function() {
      alert("errore");
    }
  });
}
function print(type, movies) {
  var objs = $("#risultato");
  for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];
    var source = $("#movie").html();
    var template = Handlebars.compile(source);
    title = "";
    originalTitle = "";
    if (type == "movies") {
      title = movie.title;
      originalTitle = movie.original_title;
    } else {
      title = movie.name;
      originalTitle = movie.original_name;
    }
    var context = {
      type: type,
      title: title,
      originalTitle: originalTitle,
      movieLan: getLangFlag(movie.original_language),
      movieRate: getStarFromRate(movie.vote_average),
      img: getPosterImg(movie.poster_path)
    };
    var html = template(context);
    objs.append(html);
  }
}






function initial() {
  // console.log("init");
  $("#myButton").click(searchClick);

}
$(document).ready(searchClick);
