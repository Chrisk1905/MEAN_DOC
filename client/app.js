var app = angular.module('nerdApp', ['ngRoute', 'angularMoment']);
app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html'
  })
  .when('/dashboard', {
    templateUrl: 'partials/dashboard.html'
  })
  .when('/addAppointment', {
    templateUrl: 'partials/appointment.html'
  })
  .otherwise({
    redirectTo: '/'
  })
})
