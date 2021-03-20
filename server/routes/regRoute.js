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

router.post('/login',(req,res)=>{
    console.log(req.body);
    let em=req.body.email;
    let pas=req.body.password;
    var c=0;
    var n1;
    Regu.find().then((result)=>{
        for(let i=0;i<result.length;i++){
            if(result[i].email==em && result[i].password==pas){
                c+=1;
                n1=result[i].name
            }
        }
        res.json({cou:c,name:n1});
    });
})
module.exports=router;