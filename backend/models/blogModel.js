import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: Date, default: Date.now },
  profile: { type: String, required: true },
  likes: [{ type: String, default: "" }],
  likeCount: { type: Number, default: 0 },
  comments: [
    {
      profile: { type: String, required: true },
      name: { type: String, required: true },
      comment: { type: String, required: true },
      date: { type: Date, default: Date.now },
    },
  ],
});
//blog models

const blogModel = mongoose.models.blog || mongoose.model("blog", blogSchema);
export default blogModel;
