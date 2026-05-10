const {registerUser}=require('../Service/auth.service');

const register=async (req,res)=>{
    
    try{
         console.log(req.body);
        const {name,email,password}=req.body;
       

        const data= await registerUser(name,email,password);

        res.status(201).json({
            success:true,
            message:'User registered Successfully',
            data
        });
    }
    catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

module.exports={register};