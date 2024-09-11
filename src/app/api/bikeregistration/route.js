import { uploadOnCloudinary } from "../../../middleware/file";
const Bike = require("../../../model/bikeModel");
const connectDB = require("../../../dbConfig/db");
const { NextResponse } = require("next/server");
const authenticateToken = require("../../../middleware/auth");

connectDB();

// POST - Register a new bike
export const POST = async (req) => {
  try {
    // Authenticate the user from the request token
    const user = await authenticateToken(req);

    // Parse the incoming form data
    const formData = await req.formData();
    const make = formData.get("make");
    const model = formData.get("model");
    const year = formData.get("year");
    const type = formData.get("type");
    const transmission = formData.get("transmission");
    const starter = formData.get("starter");
    const price = formData.get("price");
    const imageFile = formData.get("image");

    // If an image is provided, process it
    let imageUrl = "";
    if (imageFile) {
      // Convert the image File object to a buffer
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      // Upload the image buffer to Cloudinary
      const cloudinaryResponse = await uploadOnCloudinary(buffer);
      // Check if the upload was successful
      if (!cloudinaryResponse) {
        return NextResponse.json(
          { success: false, message: "Failed to upload image" },
          { status: 500 }
        );
      }

      imageUrl = cloudinaryResponse.secure_url;
    }

    console.log("User:", imageUrl);

    // Prepare the bike data with the image URL and user ID
    const newBikeData = {
      make,
      model,
      year,
      type,
      transmission,
      starter,
      price,
      image: imageUrl, // Image URL from Cloudinary
      user: user._id, // User ID from the authentication token
    };

    // Create and save the new bike object in the database
    const newBike = new Bike(newBikeData);
    const savedBike = await newBike.save();

    // Return a success response with the saved bike data
    return NextResponse.json({
      success: true,
      message: "Bike registered successfully",
      bike: savedBike,
    });
  } catch (error) {
    console.error("Error registering bike:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to register bike",
        error: error.message,
        stack: error.stack,
      },
      { status: 500 }
    );
  }
};

// GET - Retrieve all bikes
export const GET = async (req) => {
  try {
    // console.log("get request");
    const bikes = await Bike.find();
    return NextResponse.json({
      success: true,
      bikes,
    });
  } catch (error) {
    console.error("Error retrieving bikes:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve bikes",
        error: error.message,
        stack: error.stack,
      },
      { status: 500 }
    );
  }
};

// PUT - Update a bike by ID
export const PUT = async (req) => {
  try {
    const bikeId = req.url.split("/").pop(); // Extract the bike ID from the URL
    const updateData = await req.json();
    const updatedBike = await Bike.findByIdAndUpdate(bikeId, updateData, {
      new: true,
    });

    if (!updatedBike) {
      return NextResponse.json(
        {
          success: false,
          message: "Bike not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Bike updated successfully",
      bike: updatedBike,
    });
  } catch (error) {
    console.error("Error updating bike:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update bike",
        error: error.message,
        stack: error.stack,
      },
      { status: 500 }
    );
  }
};

// DELETE - Delete a bike by ID
export const DELETE = async (req) => {
  try {
    const bikeId = req.url.split("/").pop(); // Extract the bike ID from the URL
    const deletedBike = await Bike.findByIdAndDelete(bikeId);

    if (!deletedBike) {
      return NextResponse.json(
        {
          success: false,
          message: "Bike not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Bike deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting bike:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete bike",
        error: error.message,
        stack: error.stack,
      },
      { status: 500 }
    );
  }
};
