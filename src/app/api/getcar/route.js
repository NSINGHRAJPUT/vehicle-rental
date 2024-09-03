import Rental from "../../../model/rentalModel";

const Car = require("../../../model/carModel");
const connectDB = require("../../../dbConfig/db");
const { NextResponse } = require("next/server");
const authenticateToken = require("../../../middleware/auth");

connectDB();

// GET - Retrieve all cars
export const GET = async (req) => {
  try {
    const user = await authenticateToken(req);

    // Fetch cars owned by the user
    const cars = await Car.find({ user: user._id });

    // Separate the cars based on their rental status
    const carsOnRent = [];
    const carsNotOnRent = [];

    for (const car of cars) {
      if (car.rented) {
        // If the car is rented, find the corresponding rental and populate user data
        const rental = await Rental.findOne({
          vehicle: car._id,
          vehicleType: "Car",
        }).populate("user");
        carsOnRent.push({ car, rentalUser: rental ? rental.user : null });
      } else {
        carsNotOnRent.push(car);
      }
    }

    return NextResponse.json({
      success: true,
      carsOnRent,
      carsNotOnRent,
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
