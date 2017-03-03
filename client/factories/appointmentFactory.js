app.factory('appointmentFactory', function($http, $location, $route){
  var factory = {}

  factory.addAppointment = function(appointment){
    $http.post('/createAppointment',appointment).then(function(output){
      if(output.data.error){
        console.log(output.data.error)
      }else{
        $location.url('/dashboard')
      }
    })
  }

  factory.dateCheck = function(appointment, cb){
    $http.post('/checkDate', appointment).then(function(output){
      cb(output.data.spots)
    })
  }

  factory.showAppointments= function(cb){
    $http.get('/showAppointments').then(function(output){
      if(output.data.error){
        alert(output.data.error)
      }else {
        cb(output.data)
      }
    })
  }

  factory.cancel = function(appointment){
    $http.post('/cancel', appointment).then(function(output){
      if(output.data.error){
        console.log(output.data.error)
      }else{
        $route.reload()
      }
    })
  }

  return factory
})
