const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const connectDB = require("../../../dbConfig/db");
const { NextResponse } = require("next/server");
const vehicleRentUser = require("../../../model/User");
// import vehicleRentUser from "@/model/User";

connectDB();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const POST = async (req) => {
  try {
    const { email, password } = await req.json();
    console.log(email, password);
    // Find user by email
    const user = await vehicleRentUser.findOne({ email });
    if (!user) {
      return NextResponse.json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Create a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Send confirmation email
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: "Login Alert",
      text: `Hi ${user.name},\n\nYou have successfully logged in to your account. If this wasn't you, please contact support immediately.\n\nBest regards,\nYour Company`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to login",
        error: error.message,
        stack: error.stack,
      },
      { status: 500 }
    );
  }
};
