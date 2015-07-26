'use strict';

var app = angular.module('gartma', ['ngRoute']);


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
