$(document).ready(function(){
var celc
//Returns latitude, longitude
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $.getJSON(
      "https://fcc-weather-api.glitch.me/api/current?lat=" +
        position.coords.latitude +
        "&lon=" +
        position.coords.longitude,
      //Put JSON in html
      function(json) {
        celc = Math.floor(json.main.temp); 
        $("#town").html(json.name);
        $("#temperature").html(
          celc +
            "&deg" +
            "<small><a href='#' id='convert'>C</a></small>"
        );
        $("#conditions").html(json.weather[0].description);
        $("#datadisplay").html("<img alt='weather icon' src='" + json.weather[0].icon + "'>");
      }
    );
  });
}
/////////////////////////

//CONVERT CELCIUS TO FAHREN.
$("#temperature").click(function(){
  var fahrenheit = Math.floor(celc * 1.8 + 32);
 var system = $("#convert").text();
  if(system === "C"){
  $("#temperature").html(fahrenheit + "&deg" + "<small><a href='#' id='convert'>F</a></small>");
  }
  else {

$("#temperature").html(celc + "&deg" + "<small><a href='#' id='convert'>C</a></small>");
  } 
  
});
});


