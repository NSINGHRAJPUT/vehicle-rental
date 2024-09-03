import { NextResponse } from "next/server";
import connectDB from "../../../dbConfig/db";
import Rental from "../../../model/rentalModel";
import Payment from "../../../model/paymentModel";
import Bike from "../../../model/bikeModel";
import authenticateToken from "../../../middleware/auth";

connectDB();

export const POST = async (req) => {
  try {
    const user = await authenticateToken(req);
    const { vehicleId, rentalStartDate, rentalEndDate, amount } =
      await req.json();

    // Validate request data
    if (!vehicleId || !rentalStartDate || !rentalEndDate || !amount) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if the bike is available for rent
    const bike = await Bike.findById(vehicleId);
    if (!bike || bike.rented) {
      return NextResponse.json(
        { message: "Bike is not available for rent" },
        { status: 400 }
      );
    }

    // Create a dummy payment entry
    const payment = new Payment({
      amount,
      status: "completed",
      transactionId: "dummy_transaction_id", // Dummy transaction ID
    });
    const savedPayment = await payment.save();

    // Create a new rental entry
    const rental = new Rental({
      vehicle: vehicleId,
      vehicleType: "Bike",
      user: user._id,
      rentalStartDate,
      rentalEndDate,
      payment: savedPayment._id,
    });
    const savedRental = await rental.save();

    // Mark the bike as rented
    bike.rented = true;
    await bike.save();

    return NextResponse.json({
      success: true,
      message: "Bike rented successfully",
      rental: savedRental,
    });
  } catch (error) {
    console.error("Error creating rental:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        error: error.message,
      },
      { status: 500 }
    );
  }
};
