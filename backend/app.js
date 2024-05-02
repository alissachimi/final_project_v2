const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const mongoose = require('mongoose')

const PostModel = require('./Models/post')
const EventModel = require('./Models/events') // events
const EventRSVPModel = require('./Models/eventRSVPs') // eventRSVPs

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

// set up events

// dummy test data
// app.post('/api/events',(req,res,next)=>{
//   const event = new EventModel ({
//     eventChair: 'Event Chair',
//     eventName: 'Event TBD',
//     eventDate: 'Date TBD',
//     details: 'Details for the event are found here',
//     rsvpCount: -1
//   })
//   event.save()
// });
app.post('/api/events',(req,res,next)=>{
  const event = new EventModel ({
    // id: req.body.id,
    // eventChair: req.body.chair,
    // eventName: req.body.name,
    // eventDate: req.body.date,
    // details: req.body.details,
    // rsvpCount: req.body.rsvpCount
    // id: Number,
    eventChair: String,
    eventName: String,
    eventDate: Date,
    details: String,
    rsvpCount: Number
  })
  event.save()
});

app.get('/api/events', (req, res, next)=>{
  EventModel.find().then(documents =>{
    res.status(200).json({
      message: 'successfully accessed events data',
      events: documents
    })
  })
})
// set up eventRSVPs
app.post('/api/eventRSVPs',(req,res,next)=>{
  const rsvp = new EventRSVPModel ({
    // id: Number,
    eventID: {type: Schema.Types.ObjectId, ref: "Event"}, // create "foreign key"
    rollCallNum: Number
  })
  rsvp.save()
});
app.get('/api/eventRSVPs', (req, res, next)=>{
  EventModel.find().then(documents =>{
    res.status(200).json({
      message: 'successfully accessed eventRSVPs data',
      rsvp: documents
    })
  })
})

module.exports = app
