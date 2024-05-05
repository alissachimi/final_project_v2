const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const mongoose = require('mongoose')

const PostModel = require('./Models/post')
const EventModel = require('./Models/events') // events
const EventRSVPModel = require('./Models/eventRSVPs') // eventRSVPs
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


app.post('/api/posts',async (req,res,next)=>{
  //get the current date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  var today_formatted = mm + '/' + dd + '/' + yyyy;

  //get author name based on roll call number inputted
  var member_document = await MemberModel.findOne( { "roll_call": String(req.body.roll_call) } )
  var member_name = member_document.first_name + ' ' + member_document.last_name

  const post = new PostModel({
    id: req.body.id,
    roll_call: req.body.roll_call,
    author: member_name,
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
      date: createPost.my_date,
      author: member_name
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

app.get('/api/events', (req, res, next)=>{
  EventModel.find().then(documents =>{
    res.status(200).json({
      message: 'successfully accessed events data',
      events: documents
    })
  })
})

// set up eventRSVPs
app.post('/api/eventsRSVP', async (req,res,next)=>{
  //get author name based on roll call number inputted
  var member_document = await MemberModel.findOne( { "roll_call": String(req.body.rollCallNum) } )
  var member_name = member_document.first_name + ' ' + member_document.last_name

  console.log(req.body.eventID)

  //get event name based on event id
  var event_document = await EventModel.findOne( { "eventID": req.body.eventID } )
  var event_name = event_document.eventName


  console.log(event_name)

  const rsvp = new EventRSVPModel ({
    eventID: String(req.body.eventID),
    rollCallNum: req.body.rollCallNum
  })
  rsvp.save().then(createRSVP => {
    console.log('Post inserted successfully');
    res.status(201).json({
      message: 'Post added successfully',
      name: member_name,
      event: event_name,
    })

    EventModel.findOne({ "eventID": req.body.eventID })
      .then(event => {
        if (event) {
          // Call the method to increment RSVP count
          event.rsvpCount += 1;
          event.save()
            .then(updatedRSVPCount => {
              console.log('RSVP count updated:', updatedRSVPCount);
            })
            .catch(error => {
              console.error('Error updating RSVP count:', error);
            });
        } else {
          console.log('Event not found');
        }
      })

    .catch(error => {
      console.error('Error finding event:', error);
    });

  })
  .catch((error) => {
    console.error('Error inserting post:', error);
  });
});

app.get('/api/eventRSVPs', (req, res, next)=>{
  EventModel.find().then(documents =>{
    res.status(200).json({
      message: 'successfully accessed eventRSVPs data',
      rsvp: documents
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
