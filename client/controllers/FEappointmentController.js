app.controller('appointmentController', function($scope, appointmentFactory){

  $scope.appointment_errors = []
  $scope.all_appointments = []
  $scope.today = new Date()

  $scope.addAppointment = function(curUser){
    $scope.appointment_errors = []
    if(!$scope.appointment||!$scope.appointment.complaint){
      $scope.appointment_errors.push("Please enter a complaint")
    }
    else if(!$scope.appointment.date || !$scope.appointment.time){
      $scope.appointment_errors.push("Please enter a date and time")
    }
    else if($scope.appointment.complaint<10){
      $scope.appointment_errors.push("Complaint must be at least 10 characters")
    }
    else{
      appointmentFactory.dateCheck($scope.appointment, function(spots){
        if(spots){
          console.log(spots)
          $scope.appointment._user = curUser._id
          appointmentFactory.addAppointment($scope.appointment)
        }else{
          $scope.appointment_errors.push("This date is already fully booked")
        }
      })
    }
  }

  appointmentFactory.showAppointments(function(data){
    $scope.all_appointments = data
  })

  $scope.cancel = function(appointment){
    appointmentFactory.cancel(appointment)
  }

})
