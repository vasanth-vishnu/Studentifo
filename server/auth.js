const jwt=require('jsonwebtoken')
const Regu=require('./models/reg1');
const auth=async(req,res,next)=>{
    try{
        const token=req.header('Authorization').replace('Bearer ','')
        const decoded=jwt.verify(token,process.env.JWT_SECRET||'vasanth')
        const user=await Regu.findOne({_id:decoded._id,'tokens.token':token})
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