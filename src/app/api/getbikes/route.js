const Bike = require("../../../model/bikeModel");
const connectDB = require("../../../dbConfig/db");
const { NextResponse } = require("next/server");
const authenticateToken = require("../../../middleware/auth");

connectDB();

// POST - Register a new bike

// GET - Retrieve all bikes
export const GET = async (req) => {
  try {
    // console.log("get request");
    const user = await authenticateToken(req);
    // Add user ID to bike data
    const bikes = await Bike.find({ user: user._id });
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
