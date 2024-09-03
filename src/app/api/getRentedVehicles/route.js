const Rental = require("../../../model/rentalModel");
const connectDB = require("../../../dbConfig/db");
const { NextResponse } = require("next/server");
const authenticateToken = require("../../../middleware/auth");

connectDB();

// GET - Retrieve rented vehicles for the authenticated user
export const GET = async (req) => {
  try {
    const Car = require("../../../model/carModel"); // Replace with actual path
    const Bike = require("../../../model/bikeModel"); // Replace with actual path
    const Payment = require("../../../model/paymentModel");
    const user = await authenticateToken(req);

    // Find all rentals for the authenticated user
    const rentals = await Rental.find({ user: user._id })
      .populate("vehicle")
      .populate("payment");

    // Format the response to include details about the vehicle and rental
    const rentedVehicles = rentals.map((rental) => {
      const vehicleDetails = rental.vehicle;

      return {
        id: rental._id,
        vehicleType: rental.vehicleType,
        make: vehicleDetails.make,
        model: vehicleDetails.model,
        rentalStartDate: rental.rentalStartDate,
        rentalEndDate: rental.rentalEndDate,
        price: vehicleDetails.price,
        paymentStatus: rental.payment.status,
        bookingNumber: rental.payment.transactionId,
      };
    });

    return NextResponse.json({
      success: true,
      vehicles: rentedVehicles,
    });
  } catch (error) {
    console.error("Error fetching rented vehicles:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch rented vehicles",
        error: error.message,
        stack: error.stack,
      },
      { status: 500 }
    );
  }
};
