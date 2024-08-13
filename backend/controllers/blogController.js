import blogModel from "../models/blogModel.js";
import userModel from "../models/userModel.js";

// add blog
const addBlog = async (req, res) => {
  const { userId, title, description } = req.body;
  try {
    const { name, profile } = await userModel.findById(userId);
    const blogData = new blogModel({
      title,
      description,
      name,
      profile,
    });
    
    const response = await blogData.save();
    res.json({ success: true, message: "Blog added" });
  } catch (error) {
    res.json({ success: false, message: "error while adding Blog" });
  }
};

// get blog
const getBlog = async (req, res) => {
    try {
        const blogs=await blogModel.find({});
        res.json({success:true,data:blogs})
    } catch (error) {
        res.json({ success: false, message: "error while getting Blogs" }); 
    }
};

// add comment
const addComment = async (req, res) => {
    const {userId,blogId,comment}=req.body;
    try {
       const {name,profile}=await userModel.findById(userId);
       const response=await blogModel.findByIdAndUpdate(blogId,{
        $push:{comments:{name,profile,comment}}
       })
       console.log(response);
       res.json({success:true,message:"comment added successfully"})
    } catch (error) {
        res.json({ success: false, message: "error while adding Comment" });  
    }
};
// const addlike
const addLike = async (req, res) => {
    const {userId,blogId}=req.body;
    try {
      const response=  await blogModel.findByIdAndUpdate(
            blogId,
            {
                $push: { likes: userId }, // Add userId to likes array 
                $inc: { likeCount: 1 } // Increment likeCount by 1
            },
            { new: true } // Return the updated document
        );
        console.log(response)
        res.json({success:true,message:"like added successfully"})
    } catch (error) {
        res.json({ success: false, message: "error while adding like" });
    }
};
export { addBlog, getBlog, addComment, addLike };
