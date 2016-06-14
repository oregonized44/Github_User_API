var apiKey = require('').apiKey

var userRepos = function(githubUser){
  $.get('https://api.github.com/users/' + githubUser + '/repos?access_token=' + apiKey).then(function(userInfo){
    for(var i in userInfo){
      $('.githubRepos').append('<li><a href="' + userInfo[i].html_url + '">' + userInfo[i].name + '</li></a><p>' + userInfo[i].description + '</p>');
    }
  });
}
