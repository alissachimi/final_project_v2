const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

// define eventRSVP schema
eventRSVPSchema = mongoose.Schema({
  // id: {type:Number, required:false}, // mongoDB automatically generates an objectID for documents
  eventID: {type:ObjectId, required: true}, // want this to be a foreign key (the randomly generated document ID from events collection)
  rollCallNum: {type:Number, required:true}
})

// creates EventRSVP model based on eventRSVPSchema
  // add any methods BEFORE creating the model
module.exports = mongoose.model('EventRSVP', eventRSVPSchema)
