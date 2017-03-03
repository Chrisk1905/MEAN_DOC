app.factory('userFactory', function($http, $location){
  var factory = {};

  factory.checkUser = function (callback) {
    $http.get('/checkuser').then(function (output) {
        if (!output.data) {
            $location.url('/');
        }
        else {
            callback(output.data);
        }
    });
  }

  factory.createUser = function (user) {
    $http.post('/createuser', user).then(function (output) {
      if (output.data) {
        $location.url('/dashboard')
      }
    })
  }
  
  return factory
})
