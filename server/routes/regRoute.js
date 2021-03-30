const express=require('express');
const router=express.Router();
const Regu=require('../models/reg1');
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post('/save',urlencodedParser,async (req,res)=>{

    const user=new Regu(req.body)
    try {
     await user.save()
     
     const token=await user.generateAuthToken()
     res.status(201).send({user,token})
     console.log(user);
    }catch(e){
     res.status(400).send(e)

    }
 
 })


router.get('/send',(req,res)=>{
    Regu.find().then((result)=>{res.json(result);console.log(result)});
});
router.post('/login',urlencodedParser,async(req,res)=>{
    try{
        console.log(req.body);
        const user=await Regu.findByCredentials(req.body.email,req.body.password)
        const token=await user.generateAuthToken()
        res.json({user:true,token:token})

    }catch(e){
        console.log('error',e);
        res.json({user:false,token:false})
       //  
    }

});
module.exports=router;