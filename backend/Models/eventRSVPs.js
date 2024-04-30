const mongoose = require('mongoose')

eventRSVPSchema = mongoose.Schema({
  id: {type:Number, required:false},
  eventID: {type:Number, required: true}, // want this to be a foreign key (the randomly generated document ID from events collection)
  rollCallNum: {type:Number, required:true}
})

module.exports = mongoose.model('EventRSVP', eventRSVPSchema)
