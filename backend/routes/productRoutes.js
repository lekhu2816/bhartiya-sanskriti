import express from 'express'
import { addProduct,getproducts } from '../controllers/productController.js';
import multer from 'multer';

import authAdminMiddleware from '../middleware/authAdminMiddleware.js';
const productRoute=express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`)
    }
});

const upload = multer({ storage: storage });

productRoute.post('/add-product',upload.array('images',4),addProduct);
productRoute.post('/list',authAdminMiddleware,getproducts);
export default productRoute;