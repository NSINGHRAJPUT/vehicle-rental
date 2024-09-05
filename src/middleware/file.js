const cloudinary = require("cloudinary").v2;
// const fs = require("fs");

// Configure cloudinary

// Upload file on cloudinary
exports.uploadOnCloudinary = async (localFilePath) => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    // Check if file exists
    if (!localFilePath) return null;
    // Upload file on cloudinary and return response
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("cloudinary Upload File response : ", response);
    // Delete file from local storage after uploading on cloudinary
    // fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    // Delete file from local storage if upload fails --> after returning null
    // fs.unlinkSync(localFilePath);
    return error;
  }
};

exports.deleteFromCloudinary = async (cloudinaryPath) => {
  try {
    // Check if file exists
    if (!cloudinaryPath) return null;

    // Delete file from cloudinary
    const response = await cloudinary.uploader.destroy(cloudinaryPath);
    console.log("cloudinary Delete File response : ", response);
    return response;
  } catch (error) {
    throw new Error(error.message || "Failed to delete file ");
  }
};
