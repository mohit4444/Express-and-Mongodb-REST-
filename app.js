const express=require('express');
const app =express();
const mongoose=require('mongoose');
require('dotenv/config');
const bodyParser=require('body-parser');
const cors=require('cors');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import routes
const postsRoute =require('./routes/posts');
app.use('/posts',postsRoute)

//Routes
app.get('/',(req,resp)=>{
    resp.send('We are on hompageee');
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true },()=>{
    console.log('db connected');
});
app.listen(3000);