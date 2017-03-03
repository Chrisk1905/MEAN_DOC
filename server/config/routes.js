var users = require('./../controllers/BEuserController')
var appointment = require('./../controllers/BEappointmentController')

module.exports = function(app){
  app.post('/createuser', function(req,res){
    users.create(req, res);
  })
  app.get('/checkuser', function(req,res){
    users.checkuser(req,res);
  })
  app.get('/logout', function(req,res){
    users.logout(req, res);
  })
  app.post('/createAppointment', function(req,res){
    appointment.create(req,res);
  })
  app.post('/checkDate', function(req,res){
    appointment.check(req,res);
  })
  app.get('/showAppointments', function(req,res){
    appointment.show(req,res);
  })
  app.post('/cancel', function(req,res){
    appointment.cancel(req,res);
  })
}
