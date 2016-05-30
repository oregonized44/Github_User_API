var apiKey = require("./../.env").apiKey;
var apiKey1 = require("./../.env").mapapiKey;
var lng1 = -105.8975;
var lng2 = -75.7583;
var lat1 = 42.1023;
var lat2 = 38.5048;

// var lng1 = -122.8367;
// var lng2 = -122.4700;
// var lat1 = 45.4323;
// var lat2 = 45.6532;

randomX = function(max,min){
  x = (Math.random() * (max-min) + min);
  return x.toPrecision(6);
};

randomY = function(max,min){
  y = (Math.random() * (max-min) + min);
  return y.toPrecision(7);
};

geocode = function (x,y){
  $.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + x + "," + y + '&key=' + apiKey1).then(function(response){
      address = response.results[0].formatted_address;
  });

};
 authenticate = function(x,y){
 $.get('https://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + x + "," + y + '&heading=100&pitch=0&scale=2&key=' + apiKey).then(function(response, status, xhr){
  var checkLength = response.split("");
   if(checkLength.length == 5243 || checkLength.length == 5625){
     console.log(checkLength.length);
     checkLength = [];
     x = parseFloat(randomX(lat1,lat2));
     y = parseFloat(randomY(lng1,lng2));
     authenticate(x,y);
   }else{
     console.log(checkLength.length);
     $('.showWeather').append("<img src= 'https://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + x + "," + y + "&heading=100&pitch=0&scale=2&key=" + apiKey + "'>");
       initMap(x,y);
       geocode(x,y);
   }
  });
 };
