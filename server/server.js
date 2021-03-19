const express=require('express');
const app=express();
const port=4000;
const mongoose=require('mongoose');
const cors=require('cors');
const dbURI='mongodb+srv://vasanth:Vasanth890@node1.nuiqe.mongodb.net/Studentify?retryWrites=true&w=majority';

app.use((cors()));
app.use((express.json()))
app.use("/",require('./routes/regRoute'));


mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((res) => app.listen(port,()=>{console.log("server is running.....and connected to db")}))
.catch((err) => console.log(err))