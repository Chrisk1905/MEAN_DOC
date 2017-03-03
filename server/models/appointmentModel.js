var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AppointmentSchema = new Schema({
  complaint: {type: String, required: true},
  date: {type: Date, required: true},
  time: {type: Date, required: true},
  _user: {type: Schema.Types.ObjectId, ref:"User"}
},  {timestamps: true });
mongoose.model('Appointment', AppointmentSchema);
