import express from "express";
import { adminSignup,adminSignin ,getAdminProducts} from "../controllers/adminController.js";
import authAdminMiddleware from "../middleware/authAdminMiddleware.js";
const adminRoutes=express.Router();

adminRoutes.post('/signup',adminSignup);
adminRoutes.post('/signin',adminSignin);
adminRoutes.post('/get-product',authAdminMiddleware,getAdminProducts)
export default adminRoutes;
