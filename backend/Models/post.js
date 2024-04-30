const mongoose = require('mongoose')

postSchema = mongoose.Schema({
  id: {type:Number, required:false},
  author: {type:String, required:true},
  title:{type:String, required:true},
  content:{type:String, required:true},
  date: {type:Date, required:true}
})

module.exports = mongoose.model('Post', postSchema)
