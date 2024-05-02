const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const mongoose = require('mongoose')

const PostModel = require('./Models/post')
const MemberModel = require('./Models/member')

mongoose.connect('mongodb+srv://an642:webdev2!@cs4380-final-project.lwkigre.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=CS4380-Final-Project')//connection string
.then(()=>{
  console.log('connected to database')
})
.catch((error)=>{
  console.log('connection error ', error)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//disables CORS
app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
  "Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS"
  );
  console.log('Middleware');
  next();
});

app.get('/', (req, res, next) => {
    res.send('Hello World!')
})


app.post('/api/posts',(req,res,next)=>{
  //get the current date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  var today_formatted = mm + '/' + dd + '/' + yyyy;

  //get author name based on roll call number inputted
  // var member_document = MemberModel.findOne( { "roll_call": 103 } )
  // console.log(member_document)
  // var member_name = member_document.first_name + ' ' + member_document.last_name
  // console.log(member_name)
  const post = new PostModel({
    id: req.body.id,
    roll_call: req.body.roll_call,
    author: null,
    title: req.body.title,
    content: req.body.content,
    my_date: today_formatted
  })
  post.save()
  .then(createPost => {
    console.log('Post inserted successfully');
    res.status(201).json({
      message: 'Post added successfully',
      postId: createPost._id,
      date: createPost.my_date
    })
  })
  .catch((error) => {
    console.error('Error inserting post:', error);
  });
});

app.get('/api/posts', (req, res, next)=>{
  PostModel.find().then(documents =>{
    res.status(200).json({
      message: 'this data is from the database',
      posts: documents
    })
  })
})

app.get('/api/members', (req, res, next)=>{
  MemberModel.find().then(documents =>{
    res.status(200).json({
      message: 'this data is from the database',
      members: documents
    })
  })
})

module.exports = app
