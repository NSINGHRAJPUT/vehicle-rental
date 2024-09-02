const Car = require("../../../model/carModel");
const connectDB = require("../../../dbConfig/db");
const { NextResponse } = require("next/server");
const authenticateToken = require("../../../middleware/auth");

connectDB();

// POST - Create a new car
export const POST = async (req) => {
  try {
    const user = await authenticateToken(req);

    const carData = await req.json();

    // Add user ID to car data
    carData.user = user._id;

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
    console.log("getrequest");
    const user = await authenticateToken(req);
    // Add user ID to car data
    const cars = await Car.find({ user: user._id });
    console.log(cars);
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
    const user = await authenticateToken(req);
    // Add user ID to car data
    carData.user = user._id;
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
