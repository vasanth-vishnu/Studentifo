const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');

const userSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
});

userSchema.methods.generateAuthToken=async function(){
    const user=this
    const token=jwt.sign({_id: user._id.toString()},process.env.JWT_SECRET||'vasanth')

    user.tokens=user.tokens.concat({token})

    await user.save()

    return token
}
userSchema.statics.findByCredentials=async (email,password)=>{
    const user =await Regu.findOne({email})
    if(!user){
        throw new Error('unable to login')
    }

    const isMatch=await bcrypt.compare(password,user.password)
    console.log(isMatch)

    if(!isMatch){
        throw new Error('unable to login');
    }

    return user
}

//hashing before saving password
userSchema.pre('save',async function(next){
    const user=this

    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,8)

    }

    next()
})
const Regu=mongoose.model('Regu',userSchema);
module.exports=Regu;