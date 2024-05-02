const mongoose = require('mongoose')

postSchema = mongoose.Schema({
  id: {type:Number, required:false},
  roll_call: {type:Number, required:true},
  author: {type:String, required:false},
  title:{type:String, required:true},
  content:{type:String, required:true},
  my_date: {type:String, required:true}
})

module.exports = mongoose.model('Post', postSchema)
