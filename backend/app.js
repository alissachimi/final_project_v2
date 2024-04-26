const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const mongoose = require('mongoose')

const PostModel = require('./Models/post')

mongoose.connect('mongodb+srv://an642:webdev2!@cs4380-final-project.lwkigre.mongodb.net/?retryWrites=true&w=majority&appName=CS4380-Final-Project')//connection string
.then(()=>{
  console.log('connected to database')
})
.catch(()=>{
  console.log('connection error')
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

app.use('/api/posts',(req,res,next)=>{
  const posts = [
    {
    id: "0",
    author: 'alissa',
    title:"post from server",
    content:"This is from the server",
    date: null
    }
  ]

  res.status(200).json({
    message:"This is fetched data",
    posts: posts
  })
});

app.post('/api/posts',(req,res,next)=>{
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  const post = new PostModel({
    id: req.body.id,
    author: req.body.author,
    title: req.body.title,
    content: req.body.content,
    date: today
  })
  post.save()
});

app.get('/api/posts', (req, res, next)=>{
  PostModel.find().then(documents =>{
    res.status(200).json({
      message: 'this data is from the database',
      posts: documents
    })
  })
})

module.exports = app
