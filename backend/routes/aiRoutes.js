import express from 'express'
const aiRoute=express.Router();
import { getResponseFromAI } from '../controllers/aiController.js';
import authMiddleware from '../middleware/auth.js';

aiRoute.post('/get-response',getResponseFromAI);
export default aiRoute;