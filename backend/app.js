const express = require('express')
const app = express()
const port = 3000

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
  picture: null,
  date: null
  }
  ]

  res.status(200).json({
    message:"This is fetched data",
    posts: posts
  })
});

module.exports = app
