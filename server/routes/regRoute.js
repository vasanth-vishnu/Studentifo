const express=require('express');
const router=express.Router();
const Regu=require('../models/reg');

router.post('/save',(req,res)=>{
    console.log("data received",req.body);
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const newregu=new Regu({
       name,
       email,
       password
    })
    newregu.save().then(()=>console.log("data successfully saved in db"))
    res.json({
        msg:"we received your data from server side"
    })
})
router.get('/send',(req,res)=>{
    Regu.find().then((result)=>{res.json(result);console.log(result)});
});


module.exports=router;