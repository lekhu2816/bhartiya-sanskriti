import express from "express";
import authMiddleware from "../middleware/auth.js";
import multer from "multer";
import {
  signup,
  signin,
  forgetPassword,
  resetPassword,
  getUserInfo,
  updateUserProfileImage,
  updateUserInfo
} from "../controllers/userController.js";


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
      return cb(null,`${Date.now()}${file.originalname}`)
  }
});

const upload = multer({ storage: storage });

const userRouter = express.Router();
userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.post('/forgetPassword',forgetPassword);
userRouter.post('/resetPassword',authMiddleware,resetPassword);
userRouter.post('/info',authMiddleware,getUserInfo)
userRouter.post('/update/profile-image',upload.single('image'),authMiddleware,updateUserProfileImage)
userRouter.post('/update/info',authMiddleware,updateUserInfo)
export default userRouter;
