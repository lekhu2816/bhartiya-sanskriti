import { v2 as cloudinary } from 'cloudinary';
const uploadToCloudnary=async(pathArr)=>{
cloudinary.config({
    cloud_name: process.env.CLOUDNIARY_CLOUD_NAME, 
    api_key: process.env.CLOUDNIARY_API_KEY, 
    api_secret: process.env.CLOUDNIARY_API_SECRET
});
const cloudnaryImageURL=[];
for (const image in pathArr){
  const result = await cloudinary.uploader.upload(pathArr[image]);
  cloudnaryImageURL.push(result.url);
}
return cloudnaryImageURL;
}

export default uploadToCloudnary;