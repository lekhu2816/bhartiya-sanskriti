import jwt from 'jsonwebtoken'

const authAdminMiddleware=async(req,res,next)=>{
    const {admintoken}=req.headers;
    if(!admintoken){
       return res.json({success:false,message:"Not Authorized Login Again"});
    }
try {
    const decoded_token=jwt.verify(admintoken,process.env.JWT_SECRETE_KEY);
    req.body.adminId=decoded_token.id;
    next();
} catch (error) {
    res.json({success:false,message:"Token expired please try again"})
}
}

export default authAdminMiddleware;
