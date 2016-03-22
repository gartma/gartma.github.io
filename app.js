'use strict';

var app = angular.module('gartma', ['ngRoute']);

app.controller('portfolioController', ['$scope', '$http', function($scope, $http){
  $http.get("..\\content\\coursework.json")
  .success(function(data, status, headers, config)
  {
    $scope.courses = data;
  })
  .error(function(data, status, headers, config){
    
  });
  
  function getUrl(course, file)
  {
    var baseUrl = '..\\content\\';
    return baseUrl.concat(course, "\\", file, '.txt');
  }

  this.GetFile = function(course, file){
  $http.get(getUrl(course, file))
  .success(function(data, status, headers, config)
  {
    alert("Success");
  })
  .error(function(data, status, headers, config)
  {
  })
  };
}]);

app.directive('navBar', function(){
  return {
    restrict: 'E',
    templateUrl: '..\\views\\nav-bar.html'
  };
});

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/home', {
      templateUrl: '\\views\\home.html'
    })
    .when('/portfolio', {
      templateUrl: '\\views\\portfolio.html'
    })
    .when('/repositories', {
      templateUrl: 'repositories.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
});
