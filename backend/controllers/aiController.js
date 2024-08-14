
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEM_API_KEY);
console.log(process.env.GEM_API_KEY)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

const getResponseFromAI =  async (req,res)=>{
  console.log(req.body)
    try {
        const userRequest = req.body.message;
        const result = await model.generateContent(`${userRequest}`);
        const response = await result.response;
        const systemResponse = response.text(); 
        res.json({success:true,data:systemResponse})

        }
     catch (error) {
        res.json({success:false,message:"Error while getting response from chat"})
    }
};

export{
    getResponseFromAI
}