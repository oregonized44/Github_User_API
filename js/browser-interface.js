var apiKey = require("./../.env").apiKey;
var address;
$(document).ready(function() {
  $('#travel_button').click(function(){
      $('.showWeather').empty();
      var x = parseFloat(randomX(lat1,lat2));
      var y = parseFloat(randomY(lng1,lng2));
      authenticate(x,y);

    });
    $('#never').click(function(){
      $('#neverList').append('<li>' + address + '</li>');

      });
  });
