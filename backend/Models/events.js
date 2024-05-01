const mongoose = require('mongoose')

eventSchema = mongoose.Schema({
  id: {type:Number, required:false},
  eventChair:{type:String, required:true},
  eventName: {type:String, required:true},
  eventDate:{type:Date, required:true},
  details: {type:String, required:true},
  rsvpCount: {type:Number, required:true}
})

module.exports = mongoose.model('Event', eventSchema)
