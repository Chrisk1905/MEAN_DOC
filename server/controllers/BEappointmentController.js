var mongoose = require('mongoose')
var User = mongoose.model('User')
var Appointment = mongoose.model('Appointment')

module.exports = (function(){
  return{
    create: function(req,res){
      console.log(req.body)
      var newAppointment = new Appointment(
        {complaint:req.body.complaint,
        date:req.body.date,
        time:req.body.time,
        _user:req.body._user}
      )
      newAppointment.save(function(err){
        if(err){
          console.log(err)
          res.json({error:"didn't save the Appointment"})
        }else{
          User.findOne({_id:req.body._user}, function(err, complainer){
            complainer._appointments.push(newAppointment._id)
            complainer.save()
            res.json({status:true})
          })
        }
      })
    }//endof create
    ,check: function(req,res){
      Appointment.find({date:req.body.date}, function(err, output){
        if(output.length > 3){
          console.log("too many appointments")
          res.json({spots: false})
        }else{
          res.json({spots: true})
        }
      })
    }
    ,show: function(req,res){
      Appointment.find({date: {$gt: new Date()}})
      .populate('_user')
      .exec(function(err, output){
        if(err){
          console.log(err)
          res.json({error:"didn't fetch appointments"})
        }else{
          res.json(output)
        }
      })
    }
    ,cancel: function(req,res){
      Appointment.findByIdAndRemove(req.body._id, function(err){
        if(err){
          console.log(err)
          res.json({error:"I wanna die"})
        }else(
          res.json({status:true})
        )
      })
    }
  }//end of return
})()
