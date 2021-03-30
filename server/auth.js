const jwt=require('jsonwebtoken')
<<<<<<< HEAD
const Regu=require('./models/reg1');
=======
const Reg=require('./models/reg');
>>>>>>> af69d900c0b8028531c06fd5604141e61167cd44
const auth=async(req,res,next)=>{
    try{
        const token=req.header('Authorization').replace('Bearer ','')
        const decoded=jwt.verify(token,process.env.JWT_SECRET||'vasanth')
<<<<<<< HEAD
        const user=await Regu.findOne({_id:decoded._id,'tokens.token':token})
=======
        const user=await Reg.findOne({_id:decoded._id,'tokens.token':token})
>>>>>>> af69d900c0b8028531c06fd5604141e61167cd44
        if(!user){
            throw new Error()
        }
        req.token=token
        req.user=user
        next()
    }catch(e){
        res.status(401).send({error:'please authenticate....'})
    }

}