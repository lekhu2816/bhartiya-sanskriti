import express from "express";
import {
  adminSignup,
  adminSignin,
  getAdminProducts,
  getAdminInfo,
  updateAdminProfileImage,
  updateAdminInfo,
} from "../controllers/adminController.js";
import authAdminMiddleware from "../middleware/authAdminMiddleware.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });
const adminRoutes = express.Router();

adminRoutes.post("/signup", adminSignup);
adminRoutes.post("/signin", adminSignin);
adminRoutes.post("/get-product", authAdminMiddleware, getAdminProducts);
adminRoutes.post("/info", authAdminMiddleware, getAdminInfo);
adminRoutes.post(
  "/update/profile-image",
  upload.single("image"),
  authAdminMiddleware,
  updateAdminProfileImage
);

adminRoutes.post('/update/info',authAdminMiddleware,updateAdminInfo)
export default adminRoutes;
