const mongoose = require('mongoose')

memberSchema = mongoose.Schema({
  _id: {type:Number, required:false},
  roll_call: {type:Number, required: true},
  first_name: {type:String, required:true},
  last_name:{type:String, required:true},
  image:{type:String, required:true},
  position: {type:String, required:true},
  title: {type:String, required:true}
})

module.exports = mongoose.model('Member', memberSchema)
