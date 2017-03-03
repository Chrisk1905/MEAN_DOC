app.controller('userController', function($scope, userFactory){

  $scope.errors = [];
  $scope.curUser = {};

  userFactory.checkUser(function(data){
    $scope.curUser = data;
  })

  $scope.addUser = function(){
    $scope.errors=[]

    if (!$scope.user || !$scope.user.name) {
      $scope.errors.push("Please enter a name.");

    }else if ($scope.user.name.length < 3){
      $scope.errors.push("Name must be at least 3 characters")
    }else{
      userFactory.createUser($scope.user)
    }
  }


})
