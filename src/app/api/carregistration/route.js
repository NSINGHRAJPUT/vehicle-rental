import { uploadOnCloudinary } from "../../../middleware/file";
const Car = require("../../../model/carModel");
const connectDB = require("../../../dbConfig/db");
const { NextResponse } = require("next/server");
const authenticateToken = require("../../../middleware/auth");

connectDB();

// POST - Create a new car
export const POST = async (req) => {
  try {
    const user = await authenticateToken(req);

    const formData = await req.formData();
    const make = formData.get("make");
    const model = formData.get("model");
    const year = formData.get("year");
    const color = formData.get("color");
    const mileage = formData.get("mileage");
    const price = formData.get("price");
    const fuelType = formData.get("fuelType");
    const transmission = formData.get("transmission");
    const engine = formData.get("engine");
    const horsepower = formData.get("horsepower");
    const owners = formData.get("owners");
    const features = formData.get("features");
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

    // Create car data
    const carData = {
      make,
      model,
      year,
      color,
      mileage,
      price,
      fuelType,
      transmission,
      engine,
      horsepower,
      owners,
      features,
      image: imageUrl,
      user: user._id,
    };

    // Save the car to the database
    const newCar = new Car(carData);
    const savedCar = await newCar.save();

    return NextResponse.json({
      success: true,
      message: "Car registered successfully",
      car: savedCar,
    });
  } catch (error) {
    console.error("Error registering car:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to register car",
        error: error.message,
        stack: error.stack,
      },
      { status: 500 }
    );
  }
};

// GET - Retrieve all cars
export const GET = async (req) => {
  try {
    const cars = await Car.find();
    return NextResponse.json({
      success: true,
      cars,
    });
  } catch (error) {
    console.error("Error retrieving cars:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve cars",
        error: error.message,
        stack: error.stack,
      },
      { status: 500 }
    );
  }
};

// PUT - Update a car by ID
export const PUT = async (req) => {
  try {
    const carId = req.url.split("/").pop(); // Extract the car ID from the URL
    const updateData = await req.json();
    const updatedCar = await Car.findByIdAndUpdate(carId, updateData, {
      new: true,
    });

    if (!updatedCar) {
      return NextResponse.json(
        {
          success: false,
          message: "Car not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Car updated successfully",
      car: updatedCar,
    });
  } catch (error) {
    console.error("Error updating car:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update car",
        error: error.message,
        stack: error.stack,
      },
      { status: 500 }
    );
  }
};

// DELETE - Delete a car by ID
export const DELETE = async (req) => {
  try {
    const carId = req.url.split("/").pop(); // Extract the car ID from the URL
    const deletedCar = await Car.findByIdAndDelete(carId);

    if (!deletedCar) {
      return NextResponse.json(
        {
          success: false,
          message: "Car not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Car deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting car:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete car",
        error: error.message,
        stack: error.stack,
      },
      { status: 500 }
    );
  }
};
