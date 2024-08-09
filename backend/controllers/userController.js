import jsonwebtoken from "jsonwebtoken";
import userModel from "../models/userModel.js";
import validator from "email-validator";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import uploadToCloudnary from "../utils/cloudinary.js";
import { response } from "express";

// JWT token generator
const createToken = (id) => {
  return jsonwebtoken.sign({ id }, process.env.JWT_SECRETE_KEY);
};

// Generate hashPassword
const generateHashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

// nodemailer setup
const sendEmail = async (resetLink, email) => {
  const transporter = nodemailer.createTransport({
    service:"gmail",
    secure:true,
    port:485,
    auth: {
      user: process.env.EMAIL_USER,
      pass:process.env.EMAIL_PASS,
    },
  });
  const mailOptions = {
    to: email,
    from: process.env.EMAIL_USER,
    subject: "Password Reset",
    text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
  Please click on the following link, or paste this into your browser to complete the process:\n\n
  ${resetLink}\n\n
  If you did not request this, please ignore this email and your password will remain unchanged.\n`,
  };
  return transporter.sendMail(mailOptions);
};



// user register(signup)

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.json({ success: false, message: "User already exist" });
    }
    if (password.length <= 6) {
      return res.json({ success: false, message: "Enter the strong password" });
    }
    if (!validator.validate(email)) {
      return res.json({ success: false, message: "Enter valid email" });
    }

    const hashedPassword = await generateHashedPassword(password);
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    return res.json({ success: true, token: token});
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error Occured in Signup" });
  }
};

// user sign in (login)
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "User doesn't exist please create account",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Enter correct password" });
    }
    const token = createToken(user._id);
    res.json({ success: true, token: token});
  } catch (error) {
    res.json({ success: false, message: "Error occured while signin" });
  }
};

const forgetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "Email doesn't exist" });
    }
    const id = user._id;
    const token = jsonwebtoken.sign({ id }, process.env.JWT_SECRETE_KEY, {
      expiresIn: "5m",
    });
    const resetLink = `http://${req.headers.host}/reset/${token}`;
    await sendEmail(resetLink, email);
    res.json({
      success: false,
      message: "Reset password link has been send to your email",
    });
  } catch (error) {
    console.log(error)
    res.json({ success: true, message: "Error occured in forgetpassword" });
  }
};

const resetPassword = async (req, res) => {
  const { userId, password } = req.body;
  if(!userId){
    return res.json({success:false,message:"User not found please try again"});
  }
  try {
    const hashedPassword = await generateHashedPassword(password);
    await userModel.findByIdAndUpdate(userId, { password: hashedPassword });
    res.json({ success: true, message: "Password Updated Successfully" });
  } catch (error) {
    res.json({ success: false, message: "Error occured in reset password" });
  }
};

// get userInfo
const getUserInfo=async(req,res)=>{
 const {userId}=req.body;
 const {name,email,profile,phoneNo}=await userModel.findById(userId)
  try {
    res.json({success:true,data:{name,email,profile,phoneNo}})
  } catch (error) {
    res.json({success:false,message:"Error occurd while getting userInfo"})
  }
}

// update userProfile
const updateUserProfileImage=async(req,res)=>{
 const image=req.file.path;
 const {userId}=req.body;
 const [profile]= await uploadToCloudnary([image]);
await userModel.findByIdAndUpdate(userId,{profile},{ new: true, runValidators: true })
 try {
  res.json({success:true,message:"Updated"})
 } catch (error) {
  res.json({success:false,message:"Error occurd while updating userProfile"})
 }
}
// update userInfo
const updateUserInfo=async(req,res)=>{
 const{userId,name,phoneNo}=req.body;
 try {
  const response= await userModel.findByIdAndUpdate(userId,{name,phoneNo});
  console.log(response)
  res.json({message:true,message:"Updated successfully"})
 } catch (error) {
  res.json({success:false,message:"Error occurd while updating userInfo"})
 }
}
export { signup, signin, forgetPassword, resetPassword,getUserInfo,updateUserProfileImage,updateUserInfo };
