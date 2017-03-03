var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: {type: String, required: true},
    _appointments: [{type: Schema.Types.ObjectId, ref:"Appointment"}]
},  {timestamps: true });
mongoose.model('User', UserSchema);
