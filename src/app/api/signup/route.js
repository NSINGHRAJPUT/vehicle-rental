import { NextResponse } from "next/server";
import vehicleRentUser from "@/model/User";
import connectDB from "../../../dbConfig/db";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

connectDB();

// Set up the nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME, // Your Gmail address
    pass: process.env.EMAIL_PASSWORD, // Your Gmail password or App password
  },
});

async function handleSignUp(req) {
  const { name, email, phoneNumber, address, password } = await req.json(); // Parse JSON body
  console.log(name, email, phoneNumber, address, password);
  if (!name || !email || !phoneNumber || !address || !password) {
    throw new Error("All fields are required");
  }

  // Hash the password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  return { name, email, phoneNumber, address, hashedPassword };
}

export const POST = async (req) => {
  console.log(req);
  try {
    const { name, email, phoneNumber, address, hashedPassword } =
      await handleSignUp(req);

    // Check if the email is already registered
    const existingUser = await vehicleRentUser.findOne({ email });
    if (existingUser) {
      return NextResponse.json({
        success: false,
        message: "Email is already registered",
      });
    }

    // Create a new user
    const newUser = new vehicleRentUser({
      name,
      email,
      phoneNumber,
      address,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Email content for the registering user
    const userMailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: "Welcome to Vehicle Rent Service!",
      text: `Hi ${name},\n\nThank you for registering with us! We're excited to have you on board.\n\nBest regards,\nVehicle Rent Service Team`,
    };

    // Email content for yourself (admin notification)
    const adminMailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_USERNAME, // Send to your own email
      subject: "New User Registration",
      text: `A new user has registered on Vehicle Rent Service:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phoneNumber}\nAddress: ${address}\n\nPlease welcome the new user.`,
    };

    // Send emails
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);

    // Return a success response
    return NextResponse.json({
      success: true,
      message: "User registered successfully and emails sent",
    });
  } catch (error) {
    console.error("Error registering user:", error);

    // Send the error details to the frontend
    return NextResponse.json(
      {
        success: false,
        message: "Failed to register user",
        error: error.message,
      },
      { status: 500 }
    );
  }
};
