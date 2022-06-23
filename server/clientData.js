const express = require('express');
const bodyParser = require("body-parser")
const session = require('express-session');
const app = express()
const port = 5000
var cors = require('cors')

const mongoose = require("mongoose")

mongoose.Promise = Promise
mongoose.connect('mongodb://localhost:27017/angulardb').then(console.log("Mongoose Up"))
app.use(bodyParser.json())

const User = require("./models/users")
// app.use(cors())

app.use(session({
  secret:'asdasd23123helloasdasddasdasdasd2e3234123',
  saveUninitialized: false,
  resave: false
}))





  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.get("/api/home", (req, res)=>{
  
// })

app.post("/api/register", async (req, res)=>{
  const {username, password} = req.body;
  const resp = await User.findOne({username})
  if(resp){
    res.send({
      success:false,
      message:"Username already there"
    })
    return
  }

  
  
  const user = new User({
    username, password
  })
  const result = await user.save()
  req.session.username = username;
    req.session.save()
  res.send({
    success:true,
    message:"Registered Successful"
  })
})

app.post("/api/login", async (req, res)=>{
  const {username, password} = req.body;
  //console.log(username, password, "Great API is working")
  const resp = await User.findOne({username, password})
  console.log(resp)
 
  if(resp){
    req.session.username = username;
    req.session.save()
    res.send({
      "success":true,
      "message":"Logged in Successful"
      })
  }else{
    
    res.send({
      "success":false,
      "message":"Login attempt failed!"
      })
  }

 
 
  
})

app.get("/api/isloggedin", (req, res)=>{
  res.json({
    status:!!req.session.username})
})



app.get("/api/data", async (req, res)=>{
  // console.log(req.session)
  const user = await User.findOne({username: req.session.username})
  if(!user){
    res.send({
      success:false,
      username: undefined,
      quote: ""
    })
  }else{
    res.send({
      success:true,
      username: req.session.username,
      quote: user.quote
    })
  }
  
  //console.log(req.session.username)

  // res.send(req.session.username)
 
})


app.get("/api/logout", (req, res)=>{

  req.session.destroy()
  res.json({
    success:true
  })

})


app.post("/api/quoteUpdate", async (req, res)=>{
  console.log(req.session.username, req.body.value)
  const user = await User.findOne({username: req.session.username})
  if(!user){
    res.send({
      success:false,
      message:"Invalid User"
    })
    return
  }

  await User.updateOne({username: req.session.username}, {$set:{quote: req.body.value}})
  res.send({
    success:true,
  })
})



