const  User=require('../Model/user.model');
const bcrypt=require('bcryptjs');
const jwt= require('jsonwebtoken');


const registerUser= async (name,email,password)=>{

    //Check existing user
const existingUser =await User.findOne({email});

if(existingUser){
    throw new  Error('User already exists');
}

//hash password

const hashPassword = await bcrypt.hash(password,10);


//create user

const user=await User.create({
    name,
    email,
    password:hashPassword
});


//generate jwt 

const token=jwt.sign(
    {
        id:user._id,
        role:user.role
    },
    'secretkey',
    {
        expiresIn:'7d'
    }
);

return{
    user,
    token
};


};

module.exports={registerUser};