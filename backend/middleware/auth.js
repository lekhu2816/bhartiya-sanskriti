import jwt from 'jsonwebtoken'

const authMiddleware=async(req,res,next)=>{
    const {token}=req.headers;
    if(!token){
       return res.json({success:false,message:"Not Authorized Login Again"});
    }
try {
    const decoded_token=jwt.verify(token,process.env.JWT_SECRETE_KEY);
    req.body.userId=decoded_token.id;
    next();
} catch (error) {
    res.json({success:false,message:"Token expired please try again"})
}
}

export default authMiddleware;
