const mongoose = require('mongoose')

// define events schema
eventSchema = mongoose.Schema({
  eventID: {Type: Number},
  // id: {type:Number, required:false}, // mongoDB automatically generates an objectID for documents
  eventChair:{type:String, required:true},
  eventName: {type:String, required:true},
  eventDate:{type:Date, required:true},
  details: {type:String, required:true},
  rsvpCount: {type:Number, required:true}
})

// method to return the number of RSVPs for an event
eventSchema.method.countRSVP = function countRSVP(){
  const count = this.rsvpCount
  console.log(count);
  return count;
}

// creates Event model based on eventSchema
  // add any methods BEFORE creating the model
module.exports = mongoose.model('Event', eventSchema)
